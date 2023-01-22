from django.urls import path
from .views import courses_show,course_create,course_view

urlpatterns = [
  path("",courses_show.as_view()),
  path("create/",course_create.as_view()),
  path("<int:pk>/",course_view.as_view())
]