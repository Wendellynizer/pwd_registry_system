# Generated by Django 5.2.1 on 2025-05-28 20:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0034_alter_applicant_education'),
    ]

    operations = [
        migrations.AlterField(
            model_name='applicant',
            name='education',
            field=models.CharField(blank=True, choices=[('1', 'None'), ('2', 'Kindergarten'), ('3', 'Elementary'), ('4', 'Junior High School'), ('5', 'Senior High School'), ('6', 'College'), ('7', 'Vocational'), ('8', 'Post Graduate')], max_length=100, null=True),
        ),
    ]
