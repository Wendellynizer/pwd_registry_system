from django.db import models
from .address import Address
from .education import EducationalAttainment
from .employment import EmploymentInfo
from .family import FamilyDetail


class Applicant(models.Model):
    lastname = models.CharField(max_length=100)
    firstname = models.CharField(max_length=100)
    middlename = models.CharField(max_length=100, null=True, blank=True)
    suffix = models.CharField(max_length=20, null=True, blank=True)
    maiden_name = models.CharField(max_length=100, null=True, blank=True)
    gender = models.CharField(
        max_length=6,
        choices={'MALE': 'Male', 'FEMALE': 'Female'}
    )
    address_id = models.OneToOneField(Address, on_delete=models.CASCADE, null=True, blank=True)
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
    education_id = models.ForeignKey(EducationalAttainment, on_delete=models.CASCADE, null=True, blank=True)
    emp_info_id = models.OneToOneField(EmploymentInfo, on_delete=models.CASCADE, null=True, blank=True)
    family_detail_id = models.OneToOneField(FamilyDetail, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f'{self.firstname} {self.lastname}'

class Application(models.Model):
    applicant_id = models.OneToOneField(Applicant, on_delete=models.CASCADE)
    # registration_no
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
        default='Pending'
    )
    processing_officer = models.CharField(max_length=100, null=True, blank=True)
    approving_officer = models.CharField(max_length=100, null=True, blank=True)
    encoder = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return f'Application of {self.applicant_id.firstname} {self.applicant_id.lastname}'
