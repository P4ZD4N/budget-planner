import jwt
from rest_framework.exceptions import AuthenticationFailed

from users.models import User


def get_user_from_jwt(token: str) -> User:
    if not token:
        raise AuthenticationFailed("Unauthenticated!")

    try:
        payload = jwt.decode(token, "secret", algorithms=["HS256"])
    except jwt.ExpiredSignatureError:
        raise AuthenticationFailed("Unauthenticated!")

    user = User.objects.filter(id=payload["id"]).first()

    if not user:
        raise AuthenticationFailed("User not found!")

    return user
