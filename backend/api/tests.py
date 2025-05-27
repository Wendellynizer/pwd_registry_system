# from django.test import TestCase
from rest_framework.test import APITestCase
from django.urls import reverse, resolve
from rest_framework import status

from .models import Application, Applicant, Barangay

# Create your tests here.
class ApplicatedCreateTest(APITestCase):
    def test_create_application(self):
        
        url = reverse('application-list')   


        data = {
            "registration_no": "6948916",
            "registration_type": "ONLINE",
            "date_applied": "2025-12-01",
            "accomplished_by": "APPLICANT",
            "accomplished_name": "Juan Dela Cruz",
            "processing_officer": 1,
            "approving_officer": "Wendel Sabelo",
            "encoder": "Wendel Sabelo",
            "applicant": {
                # "profile_pic_path": ",
                "address": {
                    "street_addres": "Purok Sili",
                    "barangay_id": 1,
                    "city": "Tagum City",
                    "province": "Davao del Norte"
                },
                "emp_info": {
                    "emp_status": "EMPLOYED",
                    "emp_category": "PRIVATE",
                    "emp_type": "REGULAR",
                    "occupation_id": 1
                },
                "lastname": "Dela Cruz",
                "firstname": "Juan",
                "suffix": "",
                "maiden_name": "",
                "birthdate": "2004-08-04",
                "gender": "MALE",
                "civil_status": "SINGLE",
                "landline": "",
                "mobile_no": "09123456789",
                "email": "",
                "education": 4,
                "family_details": {
                    "father_lastname": "Dela Cruz",
                    "father_firstname": "Pedro",
                    "father_middlename": "Danuvo",
                    "mother_lastname": "Dela Cruz",
                    "mother_firstname": "Maria",
                    "mother_middlename": "Rosario",
                    "guardian_lastname": "Rosarino",
                    "guardian_firstname": "Mikaela",
                    "guardian_middlename": "Pedroko",
                },
                # "affiliated_org": ",
                "coordinates": ""
            }
        }

        response = self.client.post(url, data, format='json')
        print(response.json())
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        # self.assertEqual(Application.objects.count(), 1)
        # self.assertEqual(Applicant.objects.count(), 1)
        # self.assertEqual(Barangay.objects.count(), 1)



