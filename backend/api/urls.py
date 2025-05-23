from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import *

router = DefaultRouter()
router.register(r'applications', ApplicationViewSet)

applicant_router = DefaultRouter()
applicant_router.register(r'applicants', ApplicantViewSet)

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('barangays/', get_barangays, name='get_barangays'),
    path('cities/', get_cities, name='get_cities'),
    path('provinces/', get_pronvinces, name='get_provinces'),
    path('educations/', get_education, name='get_education'),
    path('occupations/', get_occupations, name='get_occupations'),
    path('', include(router.urls)),
    path('', include(applicant_router.urls))
]