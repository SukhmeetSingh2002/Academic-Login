# import 
from rest_framework import serializers
from .models import CustomUser
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from django.core.mail import send_mail
from otplogin.models import Otpdetails
from django.contrib.auth.models import Group

class UserSerializer(serializers.ModelSerializer):
    groups = serializers.StringRelatedField(many = True)
    class Meta:
        model = CustomUser
        fields = ["id", "first_name", "last_name", "email","groups","username"]
    
    def create(self, validated_data):
        user = CustomUser.objects.create_user(**validated_data)
        return user

#Serializer to Register User
class RegisterSerializer(serializers.ModelSerializer):
  email = serializers.EmailField(
    required=True,
    validators=[UniqueValidator(queryset=CustomUser.objects.all())]
  )
  password = serializers.CharField(
    write_only=True, required=True, validators=[validate_password])
  password2 = serializers.CharField(write_only=True, required=True)
  group = serializers.CharField(write_only=True, required=True)
  class Meta:
    model = CustomUser
    # fields = '__all__'
    fields = ('username','password', 'password2',
         'email', 'first_name', 'last_name','group','batch')
    # extra_kwargs = {
    #   'first_name': {'required': True},
    #   'last_name': {'required': True}
    # }
  def validate(self, attrs):
    if attrs['password'] != attrs['password2']:
      raise serializers.ValidationError(
        {"password": "Password fields didn't match."})
    return attrs
  def create(self, validated_data):
    user = CustomUser.objects.create(
      username=validated_data['username'],
      email=validated_data['email'],
      first_name=validated_data['first_name'],
      last_name=validated_data['last_name'],
      batch = validated_data['batch']
    )
    current = Group.objects.get(name = validated_data['group'])
    user.groups.set([current]) 
    user.save()
    otp = Otpdetails.objects.create(user = user)
    otp.setup(user)
    otp.save()
    # print(validated_data['email'])
    # send_mail('Welcome to DEP', 'Please find your otp below' + str(otp.otp), '2020csb1121@iitrpr.ac.in', [validated_data['email']], fail_silently=True)
    user.set_password(validated_data['password'])
    return user


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()

class OTPSerializer(serializers.Serializer):
    otp = serializers.IntegerField()
    email = serializers.EmailField()


