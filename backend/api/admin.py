from django.contrib import admin
from .models.address import *
from .models.education import *
from .models.employment import *
from .models.family import *
from .models.identifier import *
from .models.pwd import *

# Register your models here.
admin.site.register(Barangay)
admin.site.register(City)
admin.site.register(Province)
admin.site.register(Address)
admin.site.register(EducationalAttainment)
admin.site.register(Occupation)
admin.site.register(EmploymentInfo)
admin.site.register(FamilyDetail)
admin.site.register(IdentifierInfo)

admin.site.register(Applicant)
admin.site.register(Application)