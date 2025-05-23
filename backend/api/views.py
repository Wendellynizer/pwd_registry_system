from rest_framework.viewsets import ModelViewSet
from rest_framework import generics
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializer import *
from .models import *

# Create your views here.
# class BarangayListAPIView(generics.ListAPIView):
#     queryset = Barangay.objects.all()
#     serializer_class = BarangaySerializer
#     permission_classes = [IsAuthenticated]

@api_view(['GET'])
def get_barangays(request):
    barangays = Barangay.objects.all()
    serializer = BarangaySerializer(barangays, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_cities(request):
    city = City.objects.all()
    serializer = CitySerializer(city, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_pronvinces(request):
    province = Province.objects.all()
    serializer = ProvinceSerializer(province, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_education(request):
    education = EducationalAttainment.objects.all()
    serializer = EducationalAttainmentSerializer(education, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_occupations(request):
    occupation = Occupation.objects.all()
    serializer = OccupationSerializer(occupation, many=True)
    return Response(serializer.data)

class ApplicationViewSet(ModelViewSet):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer

class ApplicantViewSet(ModelViewSet):
    queryset = Applicant.objects.all()
    serializer_class = ApplicantSerializer
