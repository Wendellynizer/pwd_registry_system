from django.contrib import admin
from .models.address import *

# Register your models here.
admin.site.register(Barangay)
admin.site.register(City)
admin.site.register(Province)
admin.site.register(Address)