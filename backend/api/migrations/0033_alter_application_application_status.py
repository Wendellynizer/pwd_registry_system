# Generated by Django 5.2.1 on 2025-05-28 18:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0032_alter_specificdisability_details'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='application_status',
            field=models.CharField(choices=[('PENDING', 'Pending'), ('APPROVED', 'Approved'), ('REJECTED', 'Rejected')], default='PENDING', max_length=50),
        ),
    ]
