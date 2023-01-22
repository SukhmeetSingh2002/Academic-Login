# Generated by Django 4.1.5 on 2023-01-14 06:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Otpdetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('otp', models.CharField(max_length=6)),
                ('time', models.DateTimeField()),
                ('link_string', models.CharField(max_length=20)),
                ('is_active', models.BooleanField(default=True)),
            ],
        ),
    ]