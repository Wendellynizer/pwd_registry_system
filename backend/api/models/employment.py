from django.db import models
from safedelete.models import SafeDeleteModel, SOFT_DELETE

class Occupation(models.Model):
    occupation_name = models.CharField(max_length=255,)

    def __str__(self):
        return self.occupation_name
    
class EmploymentInfo(models.Model):

    # _safedelete_policy = SOFT_DELETE

    emp_status = models.CharField(
        max_length=30, 
        choices={
            'EMPLOYED': 'Employed', 
            'UNEMPLOYED':'Unemployed',
            'SELF-EMPLOYED': 'Self-employed'
        })
    emp_category = models.CharField(
        max_length=30,
        choices={
            'GOVERMENT': 'Government',
            'PRIVATE': 'Private'
        },
        null=True, blank=True
    )
    emp_type = models.CharField(
        max_length=30,
        choices={
            'CASUAL': 'Casual',
            'EMERGENCY': 'Emergency',
            'REGULAR': 'Permanent/Regular',
            'SEASONAL': 'Seasonal',
        },
        null=True, blank=True
    )
    other_occupation_specify = models.CharField(max_length=255, null=True, blank=True)
    occupation_id = models.ForeignKey(Occupation, on_delete=models.CASCADE, null=True, blank=True)
    affiliated_org = models.CharField(max_length=255, null=True, blank=True)