# Generated by Django 5.2.1 on 2025-05-28 14:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0029_applicant_birthdate_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='processing_officer',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
