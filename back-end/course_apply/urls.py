from django.urls import path
from .views import application_create,application_view,applications_show,applications_specific_show

urlpatterns = [
  path("",applications_show.as_view()),
  path("course/<int:pk>/",applications_specific_show.as_view()),
  path("create/",application_create.as_view()),
  path("<int:pk>/",application_view.as_view())
]