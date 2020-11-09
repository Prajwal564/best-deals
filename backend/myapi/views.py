from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import ProductSerializer, CategorySerializer
from .models import Product, Category


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by('category_label')
    serializer_class = CategorySerializer

    def list(self, request, *args, **kwargs):
        self.object_list = self.filter_queryset(self.get_queryset())
        serializer = self.serializer_class(self.object_list, many=True)
        return Response({'offers': serializer.data})
