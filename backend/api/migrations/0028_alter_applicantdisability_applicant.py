# Generated by Django 5.2.1 on 2025-05-28 02:29

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0027_applicantdisability_specific_disability'),
    ]

    operations = [
        migrations.AlterField(
            model_name='applicantdisability',
            name='applicant',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='applicant_disability', to='api.applicant'),
        ),
    ]
