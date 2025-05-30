# Generated by Django 5.2.1 on 2025-05-20 17:26

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_applicant_address_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='Application',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('registration_type', models.CharField(choices=[('ONLINE', 'Online Application'), ('WALK-IN', 'Walk-in Application')], max_length=50)),
                ('date_applied', models.DateField(auto_now_add=True)),
                ('accomplished_by', models.CharField(blank=True, choices=[('APPLICANT', 'Applicant'), ('GUARDIAN', 'Guardian'), ('REPRESENTATIVE', 'Representative')], max_length=50, null=True)),
                ('accomplished_by_name', models.CharField(max_length=100)),
                ('application_status', models.CharField(choices=[('PENDING', 'Pending'), ('APPROVED', 'Approved'), ('REJECTED', 'Rejected')], default='Pending', max_length=50)),
                ('processing_officer', models.CharField(blank=True, max_length=100, null=True)),
                ('approving_officer', models.CharField(blank=True, max_length=100, null=True)),
                ('encoder', models.CharField(blank=True, max_length=100, null=True)),
                ('applicant_id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='api.applicant')),
            ],
        ),
    ]
