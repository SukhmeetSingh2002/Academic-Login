


from rest_framework import serializers
from .models import CourseApply

class ApplicationSerializer(serializers.ModelSerializer):
    course_name = serializers.CharField(source='course.name',required=False)
    instructor = serializers.CharField(source='course.instructor.username',required=False)
    student = serializers.CharField(source='student.username',required=False)
    credits = serializers.IntegerField(source='course.credits',required=False)
    class Meta:
        model = CourseApply
        fields = ['id','course_name','course','status','grade','instructor','credits','student']
        read_only_fields = ['id','course_name','status',       'instructor',          'student']
        # write_only_fields = ['course']
    
    def create(self, validated_data):
        course = CourseApply.objects.create(**validated_data, student = self.context['request'].user)
        return course

# class ApplicationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CourseApply
#         fields = ['id','course','status','grade','student']
#         read_only_fields = ['student']
#         # write_only_fields = ['course']
    
#     def create(self, validated_data):
#         course = CourseApply.objects.create(**validated_data, student = self.context['request'].user)
#         return course