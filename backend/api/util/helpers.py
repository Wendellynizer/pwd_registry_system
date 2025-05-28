import random
from ..models import Application

def generate_random_reg_no():
    while True:
        number = str(random.randint(1000000, 9999999)) # 7-digit number
        if not Application.objects.filter(registration_no=number).exists():
            return number