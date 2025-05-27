from django.db import models
from safedelete.models import SafeDeleteModel, SOFT_DELETE

#* models for Address
#* it is made like this to become flexible
# idk why i did it like this bisag tagum raman unta mugamit HAHAH pero basin diay
# gamiton sa uban cities/municipalities uwu

class Barangay(models.Model):
    barangay_name = models.CharField(max_length=50)

    def __str__(self):
        return self.barangay_name

class Address(models.Model):

    # _safedelete_policy = SOFT_DELETE

    street_address = models.CharField(max_length=150)
    barangay_id = models.ForeignKey(Barangay, on_delete=models.CASCADE, null=True, blank=True)
    city = models.CharField(max_length=50, null=True, blank=True)
    province = models.CharField(max_length=50, null=True, blank=True)
