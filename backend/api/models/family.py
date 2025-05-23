from django.db import models

class FamilyDetail(models.Model):
    father_lastname = models.CharField(max_length=100, null=True, blank=True)
    father_firtname = models.CharField(max_length=100, null=True, blank=True)
    father_middlename = models.CharField(max_length=100, null=True, blank=True)
    mother_lastname = models.CharField(max_length=100, null=True, blank=True)
    mother_firstname = models.CharField(max_length=100, null=True, blank=True)
    mother_middlename = models.CharField(max_length=100, null=True, blank=True)
    guardian_lastname = models.CharField(max_length=100, null=True, blank=True)
    guardian_firstname = models.CharField(max_length=100, null=True, blank=True)
    guardian_middlename = models.CharField(max_length=100, null=True, blank=True) 