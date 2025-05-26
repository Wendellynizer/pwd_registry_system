from django.urls import path, re_path, include
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
    path('barangays/', get_barangays, name='get_barangays'),
    path('cities/', get_cities, name='get_cities'),
    path('provinces/', get_pronvinces, name='get_provinces'),
    path('educations/', get_education, name='get_education'),
    path('occupations/', get_occupations, name='get_occupations'),
    path('', include(router.urls)),
    path('', include(applicant_router.urls)),
    # path('barangays/', BarangayListAPIView.as_view()),

    #* simple token auth
    re_path('login/', login),
    re_path('create-account/', create_account),
    path('test-token/', test_token),

    #! for JWT auth
    path('token/', TokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
]