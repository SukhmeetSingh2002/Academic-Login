# from django.shortcuts import render,get_object_or_404
from rest_framework.response import Response
from rest_framework import status 
from usercustom.models import CustomUser 
from .serializers import CourseSerializer
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from .models import Course
from course_apply.models import CourseApply

class courses_show(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self,request,*args,**kwargs):
        user = request.user
        if user.groups.filter(name='Student').exists():
            current = Course.objects.all()
            temp = user.studentOf.all().values_list('course',flat=True)
            currents = Course.objects.filter(pk__in = temp)
            current = current.difference(currents)
        elif user.groups.filter(name='Instructor').exists():
            current = Course.objects.filter(instructor = user)
        elif user.groups.filter(name='Faculty Advisor').exists():
            current = Course.objects.all()
        print(current)
        print(temp)
        print(currents)
        serializer = CourseSerializer(current,many = True)
        return Response(serializer.data)
    

class course_create(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    def post(self,request,*args,**kwargs):
        user = request.user
        if user.groups.filter(name='Instructor').exists():
            serializer = CourseSerializer(data=request.data,context = {'request':request})
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,status=status.HTTP_201_CREATED)
            return Response({'error':serializer.errors},status=status.HTTP_400_BAD_REQUEST)
        return Response({'error':'You are not authorized to create a course'},status=status.HTTP_401_UNAUTHORIZED)
    
class course_view(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self,request,pk,*args,**kwargs):
        # user = request.user
        try:
            current = Course.objects.get(id = pk)
        except Course.DoesNotExist:
            return Response({'error':'Course does not exist'},status=status.HTTP_404_NOT_FOUND)
        serializer = CourseSerializer(current)
        return Response(serializer.data)
    
    def delete(self,request,pk,*args,**kwargs):
        user = request.user
        if user.groups.filter(name='Instructor').exists():
            current = Course.objects.get(id = pk,instructor = user)
            current.delete()
            return Response({'status':'successfully deleted'},status=status.HTTP_204_NO_CONTENT)
        return Response({'error':'You are not authorized to delete a course'},status=status.HTTP_401_UNAUTHORIZED)
    
    def put(self,request,pk,*args,**kwargs):
        user = request.user
        if user.groups.filter(name='Instructor').exists():
            current = Course.objects.get(id = pk,instructor = user)
            serializer = CourseSerializer(instance=current,data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response({'error':serializer.errors},status=status.HTTP_400_BAD_REQUEST)
        return Response({'error':'You are not authorized to update a course'},status=status.HTTP_401_UNAUTHORIZED)
    