from django.contrib import admin
from django.urls import path

from auth.views import RegisterView, LoginView, LogoutView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("register", RegisterView.as_view()),
    path("login", LoginView.as_view()),
    path("logout", LogoutView.as_view()),
]
