from rest_framework.viewsets import ModelViewSet
from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token

from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404

from .serializer import *
from .models import *
from .util import messages, helpers

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
def get_occupations(request):
    occupation = Occupation.objects.all()
    serializer = OccupationSerializer(occupation, many=True)
    return Response(serializer.data)

class ApplicationViewSet(ModelViewSet):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer

# class ApplicantViewSet(ModelViewSet):
#     queryset = Applicant.objects.all()
#     serializer_class = ApplicantSerializer


# account login/create
@api_view(['POST'])
def login(request):

    # handle empty fields also

    # checks if the user exist based on username, return 404 if not
    user = get_object_or_404(User, username=request.data['username'])

    # checks password, return 404 if not
    if not user.check_password(request.data['password']):
        return Response({'detail': messages.USER_NOT_FOUND_ERROR }, status=status.HTTP_401_UNAUTHORIZED)

    # getting/creating token for auth
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(instance=user)

    return Response({'token': token.key, 'user': serializer.data})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout(request):
    request.user.auth_token.delete() # Deletes the token
    return Response({"detail": "Successfully logged out."}, status=status.HTTP_200_OK)

@api_view(['POST'])
def create_account(request):

    # handle empty values
    # create serializer for User
    serializer = UserSerializer(data=request.data)

    if serializer.is_valid():
        # creating the user
        user = serializer.save()

        # generate token and return the json token and user data
        token = Token.objects.create(user=user)
        return Response({'token': token.key, 'user': serializer.data})
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def test_token(request):
    return Response({"passed for {}".format(request.user.username)})




#* HELPERS
@api_view(['GET'])
def generate_reg_number(request):
    reg_no = helpers.generate_random_reg_no()
    return Response({'registration_no': reg_no}, status=status.HTTP_200_OK)