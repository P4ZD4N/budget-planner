from django.urls import path, include

urlpatterns = [
    path("api/auth/", include("auth.urls")),
    path("api/user/", include("users.urls")),
]
