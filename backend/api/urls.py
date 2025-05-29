from django.urls import path, re_path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import *

application_router = DefaultRouter()
application_router.register(r'applications', ApplicationViewSet)

disability_router = DefaultRouter()
disability_router.register(r'disabilities', DisabilityViewSet)

pwd_profile_router = DefaultRouter()
pwd_profile_router.register(r'pwds', PWDProfileViewSet)

urlpatterns = [
     #* simple token auth
    re_path('login/', login),
    re_path('logout/', logout),
    re_path('create-account/', create_account),
    path('test-token/', test_token),
    path('barangays/', get_barangays, name='get_barangays'),
    path('occupations/', get_occupations, name='get_occupations'),
    path('pwds/', get_pwds),
    path('', include(application_router.urls), name='applications'),
    path('', include(disability_router.urls), name='disabilities'),
    # path('', include(pwd_profile_router.urls)),
    # path('barangays/', BarangayListAPIView.as_view()),
    path('get-reg-no/', generate_reg_number, name='get_reg_no'),

   

    #! for JWT auth
    path('token/', TokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
]