from django.db import models
from django.contrib.auth.models import User
from .address import Address
from .employment import EmploymentInfo
from safedelete.models import SafeDeleteModel, SOFT_DELETE

class Applicant(models.Model):

    # _safedelete_policy = SOFT_DELETE
    lastname = models.CharField(max_length=100)
    firstname = models.CharField(max_length=100)
    middlename = models.CharField(max_length=100, null=True, blank=True)
    suffix = models.CharField(max_length=20, null=True, blank=True)
    maiden_name = models.CharField(max_length=100, null=True, blank=True)
    birthdate = models.DateField(null=True, blank=True)
    gender = models.CharField(
        max_length=6,
        choices={'MALE': 'Male', 'FEMALE': 'Female'}
    )
    address = models.OneToOneField(Address, on_delete=models.CASCADE, null=True, blank=True)
    civil_status = models.CharField(
        choices={
            'SINGLE': 'Single',
            'SEPARATED': 'Separated',
            'COHABITATION': 'Cohabitation (live-in)',
            'MARRIED': 'Married',
            'WIDOW/ER': 'Widow/er',
        }
    )
    landline = models.CharField(max_length=30, null=True, blank=True)
    mobile_no = models.CharField(max_length=11, null=True, blank=True)
    email = models.CharField(max_length=100, null=True, blank=True)
    education = models.CharField(
        max_length=100,
        choices={
            "1": 'None',
            '2': 'Kindergarten',
            '3': 'Elementary',
            '4': 'Junior High School',
            '5': 'Senior High School',
            '6': 'College',
            '7': 'Vocational',
            '8': 'Post Graduate',
        },
        null=True, blank=True
    )
    emp_info = models.OneToOneField(EmploymentInfo, on_delete=models.CASCADE, null=True, blank=True)
    family_details = models.JSONField(blank=True, null=True)
    identifications = models.JSONField(blank=True, null=True)
    coordinates = models.JSONField(blank=True, null=True)

    def __str__(self):
        return f'{self.firstname} {self.lastname}'

class Application(models.Model):
    # _safedelete_policy = SOFT_DELETE
    applicant = models.OneToOneField(Applicant, on_delete=models.CASCADE, null=True, blank=True)
    registration_no = models.CharField(max_length=7, unique=True, null=True, blank=True)
    registration_type = models.CharField(
        max_length=50,
        choices={
            'ONLINE': 'Online Application',
            'WALK-IN': 'Walk-in Application'
        }
    )
    date_applied = models.DateField(auto_now_add=True)
    accomplished_by = models.CharField(
        max_length=50,
        choices={
            'APPLICANT': 'Applicant',
            'GUARDIAN': 'Guardian',
            'REPRESENTATIVE': 'Representative'
        },
        null=True, blank=True
    )
    accomplished_by_name = models.CharField(max_length=100)
    application_status = models.CharField(
        max_length=50,
        choices={
            'PENDING': 'Pending',
            'APPROVED': 'Approved',
            'REJECTED': 'Rejected'
        },
        default='PENDING'
    )
    processing_officer = models.CharField(max_length=100, null=True, blank=True)
    approving_officer = models.CharField(max_length=100, null=True, blank=True)
    encoder = models.CharField(max_length=100, null=True, blank=True)
   
    def __str__(self):
        return f'Application of {self.applicant.firstname} {self.applicant.lastname}'

class PWDProfile(models.Model):
    application = models.ForeignKey(Application, on_delete=models.CASCADE, null=True, blank=True, related_name='pwdprofiles')
    status = models.CharField(
        max_length=10,
        choices={
            'ACTIVE': 'Active',
            'INACTIVE': 'Inactive',
        },
        default='ACTIVE'
    ),
    inactive_reason = models.CharField(max_length=255, null=True, blank=True), 
    date_died = models.DateField(null=True, blank=True)
    pwd_card_id = models.CharField(max_length=255, null=True, blank=True)