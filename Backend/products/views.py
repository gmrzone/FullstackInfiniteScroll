from django.core import paginator
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import CompanySerializer
from .models import Company
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
# Create your views here.





@api_view(['GET'])
def company_list(request):
    query = Company.objects.all()
    page = request.GET.get('page')
    print(page)
    paginator = Paginator(query, 9)
    try:
        query = paginator.page(page)
    except PageNotAnInteger:
        query = paginator.page(1)
    except EmptyPage:
        query = paginator.page(paginator.num_pages)
    serializer = CompanySerializer(query, many=True)
    data = {"current_page": page, "last_page": paginator.num_pages , "data":  serializer.data}
    return Response(data)