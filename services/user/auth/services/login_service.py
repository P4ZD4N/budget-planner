import datetime

import jwt
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response

from users.models import User


def login_user(request) -> Response:
    email = request.data["email"]
    password = request.data["password"]

    user = User.objects.filter(email=email).first()

    if user is None:
        raise AuthenticationFailed("User not found!")

    if not user.check_password(password):
        raise AuthenticationFailed("Incorrect password!")

    return get_login_user_response(user)


def get_login_user_response(user: User) -> Response:
    payload = {
        "id": user.id,
        "exp": (
            datetime.datetime.utcnow() + datetime.timedelta(minutes=60)
        ).timestamp(),
        "iat": datetime.datetime.utcnow().timestamp(),
    }

    token = jwt.encode(payload, "secret", algorithm="HS256")

    response = Response()
    response.set_cookie(key="jwt", value=token, httponly=True)
    response.data = {"jwt": token}

    return response
