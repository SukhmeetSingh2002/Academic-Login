from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from .serializers import UserSerializer,RegisterSerializer,LoginSerializer,OTPSerializer
from .models import CustomUser 
from rest_framework.authentication import TokenAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from rest_framework import status 
from otplogin.models import Otpdetails


# Class based view to Get User Details using Token Authentication
class UserDetailAPI(APIView):
  authentication_classes = [JWTAuthentication]
  permission_classes = [IsAuthenticated]
  def get(self,request,*args,**kwargs):
    print(request.user)
    user = CustomUser.objects.get(id=request.user.id)
    serializer = UserSerializer(user)
    return Response(serializer.data)

#Class based view to register user
class RegisterUserAPIView(generics.CreateAPIView):
  permission_classes = (AllowAny,)
  serializer_class = RegisterSerializer


@api_view(['POST'])
def login_page(request):
    serializedData = LoginSerializer(data = request.data)
    if serializedData.is_valid():
        try:
            current_user = CustomUser.objects.get(email = request.data['email'])
            Otpdetails.objects.filter(user = current_user).delete()
            otp = Otpdetails.objects.create(user = current_user)
            otp.setup()
            otp.save()
        except:
            print('no user found')
            return Response({'error':'no user found. Do you want to register.'},status = status.HTTP_401_UNAUTHORIZED)
        return Response(serializedData.data)
    else:
        return Response(serializedData.errors)


@api_view(['POST'])
def otp_verify(request):
    serializedData = OTPSerializer(data = request.data)
    if serializedData.is_valid():
        try:
            current_user = CustomUser.objects.get(email = request.data['email'])
            otpObject = Otpdetails.objects.get(user = current_user)
            otp = request.data['otp']
            if otpObject.is_valid_otp(otp):
                otpObject.delete()
                token_obj   = RefreshToken.for_user(user = current_user)
                return Response({
                    "login": True,
                    'refresh':str(token_obj),
                    'access':str(token_obj.access_token),
                    'user': UserSerializer(current_user).data
                    })
            else:
                return Response({"login":False,"error":"OTP is invalid or expired"},status = status.HTTP_401_UNAUTHORIZED)
        except:
            return Response({'error':'Invalid request. Use login or register.'},status = status.HTTP_204_NO_CONTENT)
    else:
        return Response(serializedData.errors,status = status.HTTP_204_NO_CONTENT)
