# Generated by Django 4.1.5 on 2023-01-14 06:22

from django.db import migrations
import usercustom.manager


class Migration(migrations.Migration):

    dependencies = [
        ('usercustom', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='customuser',
            managers=[
                ('objects', usercustom.manager.UserManager()),
                ('objectsall', usercustom.manager.UserManagerfiltered()),
            ],
        ),
    ]
