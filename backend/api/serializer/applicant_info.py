from rest_framework import serializers
from ..models import Barangay, Address, EducationalAttainment, EmploymentInfo, FamilyDetail, City, Province, Occupation, IdentifierInfo

class BarangaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Barangay
        fields = '__all__'

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'

class ProvinceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Province
        fields = '__all__'

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'

class EducationalAttainmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = EducationalAttainment
        fields = '__all__'

class OccupationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Occupation
        fields = '__all__'

class EmploymentInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmploymentInfo
        fields = '__all__'

class FamilyDetailSerializer(serializers.ModelSerializer):
    class Meta: 
        model = FamilyDetail
        fields = '__all__'

class IndentifierInfoSerializer(serializers.ModelSerializer):
    class Meta: 
        model = IdentifierInfo
        fields = '__all__'