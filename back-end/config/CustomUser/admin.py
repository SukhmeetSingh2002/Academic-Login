from django.contrib import admin
# from django.contrib.auth.forms import UserCreationForm
# Register your models here.
from .models import CustomUser,City
from django.contrib.auth.admin import UserAdmin


class MyAdmin(UserAdmin):
    list_display = ('username','email','is_staff','last_login','image_tag')
    # add_form = UserCreateForms
    search_fields = ('username','email')
    readonly_fields = ('last_login','date_joined', 'id','image_tag',)
    filter_horizontal = ()
    add_fieldsets = (
            (
                None,
                {
                    'classes': ('wide',),
                    'fields': ('username', 'email', 'password1', 'password2', 'is_seller'),
                },
            ),
        )
    list_filter= ()
    fieldsets = ()

admin.site.register(CustomUser,MyAdmin)
admin.site.register(City)