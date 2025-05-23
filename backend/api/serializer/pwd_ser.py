from rest_framework import serializers
from .applicant_info import *
from ..models.pwd import Applicant, Application

class ApplicantSerializer(serializers.ModelSerializer):
    address_id = AddressSerializer()
    education_id = EducationalAttainmentSerializer()
    emp_info_id = EmploymentInfoSerializer()
    family_detail_id = FamilyDetailSerializer()

    class Meta:
        model = Applicant
        fields = '__all__'

    def create(self, validated_data):
        address_data = validated_data.pop('address')
        education_data = validated_data.pop('education')
        emp_info_data = validated_data.pop('emp_info')
        family_detail_data = validated_data.pop('family_detail')

        address = Address.objects.create(**address_data)
        education = Address.objects.create(**education_data)
        emp_info = Address.objects.create(**emp_info_data)
        family_detail = Address.objects.create(**family_detail_data)

        applicant = Applicant.objects.create(
            address_id=address,
            education_id=education,
            emp_info_id=emp_info,
            family_detail_id=family_detail,
            **validated_data
        )
        
        return applicant

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'