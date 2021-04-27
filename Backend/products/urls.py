from django.urls import path
from . import views

app_name = "products"
urlpatterns = [
    path('', views.company_list, name="company_list")
]