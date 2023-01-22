from django.db import models
# from django.contrib.auth.models import User
from usercustom.models import CustomUser


# Create your models here.

class Batch(models.Model):
    name = models.TextField(blank=True,null=True,max_length=50)
    year = models.IntegerField(blank=True,null=True)
    faculty_advisor = models.ForeignKey(CustomUser,on_delete=models.CASCADE,related_name='faculty_advisor')
    def __str__(self):
        return self.name