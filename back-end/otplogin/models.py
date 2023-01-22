from django.db import models
import datetime
import random
import string
# Create your models here
from django.core.mail import send_mail
from usercustom.models import CustomUser

class Otpdetails(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    otp = models.CharField(max_length=6,blank=True,null=True)
    time = models.DateTimeField(blank=True,null=True)
    link_string = models.CharField(max_length=20,blank=True,null=True)
    is_active = models.BooleanField(default=True)

    def setup(self,*args, **kwargs):
        self.time = datetime.datetime.now()
        self.otp = str(random.randint(234567,999999))
        self.link_string = ''.join(random.choices(string.ascii_lowercase + string.ascii_uppercase +string.digits, k=20))
        print( 'Please find your otp below :' + str(self.otp))
        print(send_mail('Welcome to DEP', 'Please find your otp below :' + str(self.otp), 'donotreplydep@gmail.com', [self.user.email], fail_silently=False))
    
    def is_valid_link(self):
        current_time = datetime.datetime.now()
        current_time = current_time.replace(tzinfo=datetime.timezone.utc)
        difference = current_time - self.time 
        min = difference.total_seconds()/60
        if min>=15:
            return False
        else:
            return True and self.is_active
    
    def is_valid_otp(self,otp):
        current_time = datetime.datetime.now()
        current_time = current_time.replace(tzinfo=datetime.timezone.utc)
        difference = current_time - self.time 
        min = difference.total_seconds()/60
        if min>=2:
            return False
        else:
            return True and ((str(otp) == self.otp) and self.is_active)
    