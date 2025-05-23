from django.db import models

class EducationalAttainment(models.Model):
    education_name = models.CharField(max_length=50)

    def __str__(self):
        return self.education_name