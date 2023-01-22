from django.db import models
from usercustom.models import CustomUser
# Create your models here
from course.models import Course
class CourseApply(models.Model):
    course  = models.ForeignKey(Course,on_delete=models.CASCADE)
    student = models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    status = models.IntegerField(default=0)
    grade = models.IntegerField(blank=True,null=True)

    def __str__(self):
        return self.course.name + 'user: '+self.student.username