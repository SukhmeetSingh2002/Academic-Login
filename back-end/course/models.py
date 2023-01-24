from django.db import models
from usercustom.models import CustomUser
# Create your models here

class Course(models.Model):
    name = models.TextField(blank=True,null=True,max_length=50,unique=True)
    credits = models.IntegerField(blank=True,null=True)
    instructor = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='instructor')


    def __str__(self):
        return self.name + 'credits' + str(self.credits)