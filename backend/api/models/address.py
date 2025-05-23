from django.db import models

#* models for Address
#* it is made like this to become flexible
# idk why i did it like this bisag tagum raman unta mugamit HAHAH pero basin diay
# gamiton sa uban cities/municipalities uwu

class Barangay(models.Model):
    barangay_name = models.CharField(max_length=50)

    def __str__(self):
        return self.barangay_name

class City(models.Model):
    city_name = models.CharField(max_length=100)

    def __str__(self):
        return self.city_name

class Province(models.Model):
    province_name = models.CharField(max_length=100)

    def __str__(self):
        return self.province_name

class Address(models.Model):
    street_address = models.CharField(max_length=150)
    barangay = models.ForeignKey(Barangay, on_delete=models.CASCADE, null=True, blank=True)
    city = models.ForeignKey(City, on_delete=models.CASCADE, null=True, blank=True)
    province = models.ForeignKey(Province, on_delete=models.CASCADE, null=True, blank=True)
