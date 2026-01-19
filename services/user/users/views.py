from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer
from .services.me_service import get_user_from_jwt


class MeView(APIView):
    def get(self, request):
        token = request.COOKIES.get("jwt")
        user = get_user_from_jwt(token)
        serializer = UserSerializer(user)
        return Response(serializer.data)
