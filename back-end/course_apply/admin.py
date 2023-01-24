from django.contrib import admin

# Register your models here.

from .models import CourseApply

# admin.site.register(CourseApply)

# Register course apply model in admin site and add search and filter options

@admin.register(CourseApply)

class CourseApplyAdmin(admin.ModelAdmin):
    list_display = ('course', 'student', 'status', 'grade')
    search_fields = ('course', 'student')
    
