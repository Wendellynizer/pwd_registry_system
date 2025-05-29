from django.contrib import admin
from .models.address import *
from .models.employment import *
from .models.pwd import *
from .models.disability import *


class ApplicantAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Applicant._meta.fields]

class ApplicationAdmin(admin.ModelAdmin):
    # readonly_fields = ('date_applied',)
    list_display = [field.name for field in Application._meta.fields]
    # def get_queryset(self, request):
    #     # This includes soft-deleted records
    #     return Application.all_objects.all()
class DisabilityCategoryAdmin(admin.ModelAdmin):
    list_display = [field.name for field in DisabilityCategory._meta.fields]

# Register your models here.
admin.site.register(Barangay)
admin.site.register(Address)
admin.site.register(Occupation)
admin.site.register(EmploymentInfo)

admin.site.register(DisabilityCategory, DisabilityCategoryAdmin)
admin.site.register(DisabilityOrigin)
admin.site.register(SpecificDisability)
admin.site.register(ApplicantDisability)

admin.site.register(PWDProfile)
# admin.site.register(Applicant, ApplicantAdmin)
admin.site.register(Applicant, ApplicantAdmin)
admin.site.register(Application, ApplicationAdmin)