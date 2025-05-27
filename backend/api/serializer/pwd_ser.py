from rest_framework import serializers
from django.db import transaction
from .applicant_info import *
from ..models.pwd import Applicant, Application
   
class ApplicantSerializer(serializers.ModelSerializer):

    address = AddressSerializer()
    emp_info = EmploymentInfoSerializer()

    class Meta:
        model = Applicant
        fields = '__all__'

class ApplicationSerializer(serializers.ModelSerializer):
    applicant = ApplicantSerializer()
    partial=True
    class Meta:
        model = Application
        fields = '__all__'


    @transaction.atomic
    def create(self, validated_data):
        # fetch data from payload
        applicant_data = validated_data.pop('applicant')
        # barangay_data = validated_data.pop('barangay_id')
        address_data = applicant_data.pop('address')
        # occupation_data = validated_data.pop('occupation_id')
        emp_info_data = applicant_data.pop('emp_info')

        # saving in order
        address = Address.objects.create(**address_data)
        emp_info = EmploymentInfo.objects.create(**emp_info_data)
        applicant_inst = Applicant.objects.create(
            address=address,
            emp_info=emp_info,
            **applicant_data,
        )

        application = Application.objects.create(applicant=applicant_inst, **validated_data)
    
        print(application._meta.fields)
        return application

 
    @transaction.atomic
    def update(self, instance, validated_data):
        applicant_data = validated_data.pop('applicant', None)

        # Update Application fields
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        if applicant_data:
            applicant = instance.applicant  # Related Applicant instance

            # Handle nested address update if present
            address_data = applicant_data.pop('address', None)
            if address_data:
                address = applicant.address
                for attr, value in address_data.items():
                    setattr(address, attr, value)
                address.save()

            # Handle nested emp_info update if present
            emp_info_data = applicant_data.pop('emp_info', None)
            if emp_info_data:
                emp_info = applicant.emp_info
                for attr, value in emp_info_data.items():
                    setattr(emp_info, attr, value)
                emp_info.save()

            # Update other fields in applicant
            for attr, value in applicant_data.items():
                setattr(applicant, attr, value)
            applicant.save()

        return instance
    