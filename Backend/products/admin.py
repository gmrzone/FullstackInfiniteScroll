from django.contrib import admin
from .models import Company
# Register your models here.

@admin.register(Company)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'description', 'email')
    list_editable = ('slug',)
    search_fields = ('name', 'description')
    