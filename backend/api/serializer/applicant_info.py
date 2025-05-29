from rest_framework import serializers
from ..models import *

#* ADDRESS
class BarangaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Barangay
        fields = ["id", "barangay_name"]

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'


#* EMPLOYMENT
class OccupationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Occupation
        fields = '__all__'

class EmploymentInfoSerializer(serializers.ModelSerializer):
    # occupation_id = OccupationSerializer()
    class Meta:
        model = EmploymentInfo
        fields = '__all__'