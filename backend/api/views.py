from rest_framework import generics
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializer import *

# Create your views here.

class BarangayListAPIView(generics.ListAPIView):
    queryset = Barangay.objects.all()
    serializer_class = BarangaySerializer
    permission_classes = [IsAuthenticated]

@api_view(['POST'])
def login(request):
    return Response({'Hi'})

@api_view(['POST'])
def create_account(request):
    return Response({'create account'})