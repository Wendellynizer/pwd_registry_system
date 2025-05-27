from django.urls import path, re_path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import *

# router = DefaultRouter()
# router.register(r'applications', ApplicationViewSet)

# applicant_router = DefaultRouter()
# applicant_router.register(r'applicants', ApplicantViewSet)

application_router = DefaultRouter()
application_router.register(r'applications', ApplicationViewSet)

urlpatterns = [
    path('barangays/', get_barangays, name='get_barangays'),
    path('occupations/', get_occupations, name='get_occupations'),
    path('', include(application_router.urls), name='applications'),
    # path('barangays/', BarangayListAPIView.as_view()),
    path('get-reg-no/', generate_reg_number, name='get_reg_no'),

    #* simple token auth
    re_path('login/', login),
    re_path('logout/', logout),
    re_path('create-account/', create_account),
    path('test-token/', test_token),

    #! for JWT auth
    path('token/', TokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
]