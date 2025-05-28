from django.db import models
from .pwd import Applicant
from safedelete.models import SafeDeleteModel, SOFT_DELETE

class DisabilityCategory(models.Model):
    disability_cat_name = models.CharField(max_length=100)

    def __str__(self):
        return self.disability_cat_name
    pass

class DisabilityOrigin(models.Model):
    origin_name = models.CharField(max_length=100)

    def __str__(self):
        return self.origin_name
    pass

class SpecificDisability(models.Model):
    disability_name = models.CharField(max_length=100)
    disability_cat_id = models.ForeignKey(
        DisabilityCategory, 
        on_delete=models.CASCADE,
        null=True, blank=True
    )

    details = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.disability_name
    pass

class ApplicantDisability(models.Model):
    applicant = models.ForeignKey(
        Applicant, 
        on_delete=models.CASCADE,
        related_name='applicant_disability',
        null=True, blank=True
    )

    origin = models.ForeignKey(
        DisabilityOrigin, 
        on_delete=models.CASCADE,
        null=True, blank=True
    )
    
    specific_disability = models.ForeignKey(
        SpecificDisability, 
        on_delete=models.CASCADE,
        null=True, blank=True
    )

    def __str__(self):
        return f"Disabilty of {self.applicant.firstname} {self.applicant.lastname}"
    pass