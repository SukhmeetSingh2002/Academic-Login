


from rest_framework import serializers
from .models import Course

class CourseSerializer(serializers.ModelSerializer):
    instructorname = serializers.CharField(source='instructor.username',required=False)
    class Meta:
        model = Course
        fields = ['id','name','instructorname','credits']
        read_only_fields = ['instructorname','id']
        non_required_fields = ['instructorname']
    
    def create(self, validated_data):
        course = Course.objects.create(**validated_data, instructor = self.context['request'].user)
        return course
    