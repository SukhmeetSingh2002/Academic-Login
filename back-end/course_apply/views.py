# from django.shortcuts import render,get_object_or_404
from rest_framework.response import Response
from rest_framework import status 
from usercustom.models import CustomUser 
from .serializers import ApplicationSerializer
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from .models import CourseApply


class applications_show(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self,request,*args,**kwargs):
        user = request.user
        if user.groups.filter(name='Student').exists():
            current = CourseApply.objects.filter(student = user)
        elif user.groups.filter(name='Instructor').exists():
            current = CourseApply.objects.filter(course__instructor = user)
        elif user.groups.filter(name='Faculty Advisor').exists():
            current = CourseApply.objects.filter(student__batch__faculty_advisor = user)
        else:
            return Response({'error':'You are not authorized to view applications'},status=status.HTTP_401_UNAUTHORIZED)
        serializer = ApplicationSerializer(current,many = True)
        return Response(serializer.data)

class applications_specific_show(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self,request,pk,*args,**kwargs):
        user = request.user
        if user.groups.filter(name='Instructor').exists():
            current = CourseApply.objects.filter(course__instructor = user,course = pk)
        elif user.groups.filter(name='Faculty Advisor').exists():
            current = CourseApply.objects.filter(student__batch__faculty_advisor = user,course = pk)
        else:
            return Response({'error':'You are not authorized to view applications'},status=status.HTTP_401_UNAUTHORIZED)
        serializer = ApplicationSerializer(current,many = True)
        return Response(serializer.data)



class application_create(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    def post(self,request,*args,**kwargs):
        user = request.user
        if user.groups.filter(name='Student').exists():
            if CourseApply.objects.filter(student = user,course = request.data['course']).exists():
                return Response({'error':'You have already applied for this course'},status=status.HTTP_400_BAD_REQUEST)
            serializer = ApplicationSerializer(data=request.data,context = {'request':request})
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,status=status.HTTP_201_CREATED)
            return Response({'error':serializer.errors},status=status.HTTP_400_BAD_REQUEST)
        return Response({'error':'You are not authorized to apply for a course'},status=status.HTTP_401_UNAUTHORIZED)


class application_view(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self,request,pk,*args,**kwargs):
        user = request.user
        if user.groups.filter(name='Faculty Advisor').exists():
            current = CourseApply.objects.get(id = pk,student__batch__faculty_advisor = user, status = 1)
        elif user.groups.filter(name='Instructor').exists():
            current = CourseApply.objects.get(id = pk,course__instructor = user) 
        elif user.groups.filter(name='Student').exists():
            current = CourseApply.objects.get(id = pk,student = user)
        else:
            return Response({'error':'You are not authorized to view applications'},status=status.HTTP_401_UNAUTHORIZED)
        serializer = ApplicationSerializer(current)
        return Response(serializer.data)

    def put(self,request,pk,*args,**kwargs):
        print('Enter put')
        user = request.user
        if user.groups.filter(name='Faculty Advisor').exists():
            try:
                current = CourseApply.objects.get(id = pk,student__batch__faculty_advisor = user)
            except:
                print('put try')
                return Response({'error':'You are not authorized to edit applications'},status=status.HTTP_401_UNAUTHORIZED)
            print(request.data)
            if request.data.get('status') == 2 and current.status == 5:
                current.status = 0
                current.save()
                print('put if')
                return Response({'status':'Sent for instructor approval'},status=status.HTTP_200_OK)
            if request.data.get('status') == 2 and current.status == 1:
                current.status = 2
                current.save()
                print('put if')
                return Response({'status':'Application approved'},status=status.HTTP_200_OK)
            elif request.data.get('status') == 5:
                current.status = 5
                current.save()
                print('put elif')
                return Response({'status':'Application rejected'},status=status.HTTP_200_OK)
            elif current.status == 0:
                print('put elif 0')
                return Response({'error':'Application is not approved by Instructor'},status=status.HTTP_401_UNAUTHORIZED)
            else:
                print('put else')
                return Response({'error':"Invalid Request"},status=status.HTTP_401_UNAUTHORIZED)
        
        elif user.groups.filter(name='Instructor').exists():
            print('put instructor')
            try:
                # removed status checking filter
                current = CourseApply.objects.get(id = pk,course__instructor = user)
            except:
                return Response({'error':'You are not authorized to edit applications as an Instructor'},status=status.HTTP_401_UNAUTHORIZED)
            if current.status == 0 or current.status == 6:
                current.status = request.data.get('status')
                current.save()
                return Response({'status':'Application approved'},status=status.HTTP_200_OK)
            elif request.data.get('status') == 6:
                if current.status!=4 or current.status!=3:
                    current.status = 6
                    current.save()
                    return Response({'status':'Application rejected'},status=status.HTTP_200_OK)
                else:
                    return Response({'error':'Unable to reject application'},status=status.HTTP_401_UNAUTHORIZED)
            else:
                return Response({'error':'Invalid request'},status=status.HTTP_401_UNAUTHORIZED)
        
        elif user.groups.filter(name='Student').exists():
            print('entered')
            current = CourseApply.objects.get(id = pk,student = user)
            serializer = ApplicationSerializer(instance=current,data=request.data)
            if request.data.get('status') == 1 or request.data.get('status') == 2:
                return Response({'error':'You are not authorized to change the status of an application'},status=status.HTTP_401_UNAUTHORIZED)
            if current.status > 2:
                return Response({'error':'You are not authorized to change the status of an application'},status=status.HTTP_401_UNAUTHORIZED)
            current.status = request.data.get('status')
            current.save()
            return Response({'status':'Application updated'},status=status.HTTP_200_OK)
        return Response({'error':'You are not authorized to edit an application'},status=status.HTTP_401_UNAUTHORIZED)
