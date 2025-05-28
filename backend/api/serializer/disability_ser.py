from rest_framework import serializers
from ..models import *

#* DISABILITY
class DisabilityCategorySerializer (serializers.ModelSerializer):
    
    class Meta:
        model = DisabilityCategory
        fields = '__all__'


class DisabilityOriginSerializer (serializers.ModelSerializer):
    
    class Meta:
        model = DisabilityOrigin
        fields = '__all__'

class SpecificDisabilitySerializer (serializers.ModelSerializer):
    
    class Meta:
        model = DisabilityOrigin
        fields = '__all__'

class ApplicantDisabilitySerializer(serializers.ModelSerializer):
    origin = DisabilityOrigin()
    specific_disability = SpecificDisability()

    class Meta:
        model = ApplicantDisability
        fields = '__all__'