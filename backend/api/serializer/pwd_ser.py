from rest_framework import serializers
from django.db import transaction
from .applicant_info import *
from ..models.pwd import Applicant, Application
from ..models.disability import ApplicantDisability, DisabilityOrigin, SpecificDisability
from ..serializer.disability_ser import ApplicantDisabilitySerializer

class ApplicantSerializer(serializers.ModelSerializer):
    # applicant_disability = ApplicantDisabilitySerializer(many=True)
    # address = AddressSerializer()
    # emp_info = EmploymentInfoSerializer()
    address = AddressSerializer()
    emp_info = EmploymentInfoSerializer()
    applicant_disability = ApplicantDisabilitySerializer(many=True)

    class Meta:
        model = Applicant
        fields = '__all__'

    @transaction.atomic
    def create(self, validated_data):
        address_data = validated_data.pop('address')
        emp_data = validated_data.pop('emp_info')
        # disability_data = validated_data.pop('applicant_disability')
        # print(disability_data)
        applicant_disability = validated_data.pop('applicant_disability')
        address = Address.objects.create(**address_data)
        emp_info = EmploymentInfo.objects.create(**emp_data)

        applicant = Applicant.objects.create(
            address=address,
            emp_info=emp_info,
            **validated_data
        )

        for dis in applicant_disability:
            ApplicantDisability.objects.create(applicant=applicant, **dis)

        # return
        return applicant

class ApplicationSerializer(serializers.ModelSerializer):
    applicant = ApplicantSerializer()
    
    # partial=True
    class Meta:
        model = Application
        fields = '__all__'

    @transaction.atomic
    def create(self, validated_data):
        # print('In Application: ', validated_data)
        
        applicant_data = validated_data.pop('applicant')
        applicant = ApplicantSerializer().create(applicant_data)
        
        # print(disability_data)
        
        

        application = Application.objects.create(applicant=applicant, **validated_data)
        # return
        return application   


    # @transaction.atomic
    # def create(self, validated_data):
        # fetch data from payload
        applicant_data = validated_data.pop('applicant')
        # disability_data = applicant_data.pop('applicant_disability')
        address_data = applicant_data.pop('address')
        emp_info_data = applicant_data.pop('emp_info')
        
        
        print(applicant_data.pop('applicant_disability'))
        return
        
        # saving in order
        address = Address.objects.create(**address_data)
        emp_info = EmploymentInfo.objects.create(**emp_info_data)
        applicant_inst = Applicant.objects.create(
            address=address,
            emp_info=emp_info,
            **applicant_data,
        )

        for disability in disability_data:
            ApplicantDisability.objects.create(applicant=applicant_inst, **disability)

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
