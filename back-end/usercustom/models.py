from django.db import models
from .manager import UserManager,UserManagerfiltered
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    username = models.TextField(null=True, blank = True)
    phone_no = models.TextField(null=True, blank = True)
    is_activated = models.BooleanField(default=False)
    batch = models.ForeignKey('batch.Batch',on_delete=models.CASCADE,null=True,blank=True)
    USERNAME_FIELD =  'email'
    REQUIRED_FIELDS = []
    def __str__(self):
        return f'{self.username}'
    objects = UserManager()
    objectsall = UserManagerfiltered()