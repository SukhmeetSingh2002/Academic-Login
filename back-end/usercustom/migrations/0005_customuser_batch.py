# Generated by Django 4.1.5 on 2023-01-18 12:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('batch', '0002_alter_batch_faculty_advisor'),
        ('usercustom', '0004_alter_customuser_managers'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='batch',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='batch.batch'),
        ),
    ]