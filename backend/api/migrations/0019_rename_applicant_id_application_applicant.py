# Generated by Django 5.2.1 on 2025-05-27 04:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0018_alter_application_applicant_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='application',
            old_name='applicant_id',
            new_name='applicant',
        ),
    ]
