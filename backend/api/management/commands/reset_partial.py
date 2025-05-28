from django.core.management.base import BaseCommand
from ...models import Address, EmploymentInfo, Applicant, Application, ApplicantDisability


class Command(BaseCommand):
    help = "Reset data from specific tables"

    def handle(self, *args, **kwargs):
        Address.objects.all().delete()
        EmploymentInfo.objects.all().delete()
        Applicant.objects.all().delete()
        Application.objects.all().delete()
        ApplicantDisability.objects.all().delete()
        self.stdout.write(self.style.SUCCESS("Specific tables cleared successfully."))