# Generated by Django 5.2.1 on 2025-05-27 11:06

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0022_alter_applicant_address_alter_applicant_emp_info_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='address',
            name='barangay_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='api.barangay'),
        ),
    ]
