from django.urls import path
from .views import UserDetailAPI,RegisterUserAPIView,login_page,otp_verify
urlpatterns = [
  path("get-details",UserDetailAPI.as_view()),
  path('register',RegisterUserAPIView.as_view()),
  path('login',login_page),
  path('verify',otp_verify),
]