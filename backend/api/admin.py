from django.contrib import admin
from .models.address import *
from .models.employment import *
from .models.identifier import *
from .models.pwd import *


class ApplicantAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Applicant._meta.fields]

class ApplicationAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Application._meta.fields]


# Register your models here.
admin.site.register(Barangay)
admin.site.register(Address)
admin.site.register(Occupation)
admin.site.register(EmploymentInfo)
admin.site.register(IdentifierInfo)

# admin.site.register(Applicant, ApplicantAdmin)
admin.site.register(Applicant, ApplicantAdmin)
admin.site.register(Application, ApplicationAdmin)