from rest_framework import serializers, status
from .models import Product, Category


class ProductSerializer(serializers.ModelSerializer):
    offerPrice = serializers.CharField(source='offer_price')
    imageUrl = serializers.CharField(source='image_url')
    totalReviews = serializers.CharField(source='total_reviews')
    description = serializers.CharField()
    title = serializers.CharField()
    reviewRating = serializers.FloatField(source='review_rating')
    endDate = serializers.CharField(source='end_date')
    url = serializers.URLField()
    normalPrice = serializers.CharField(source='normal_price')
    offerPercent = serializers.FloatField(source='offer_percent')
    # fetch_date = serializers.DateTimeField()

    class Meta:
        model = Product
        fields = ['id', 'offerPrice', 'imageUrl', 'totalReviews', 'description',
                  'title', 'reviewRating', 'endDate', 'url', 'normalPrice', 'offerPercent']
        # fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    category_id = serializers.CharField()
    category_label = serializers.CharField()
    products_count = serializers.IntegerField()
    fetch_date = serializers.DateTimeField(format='%Y-%m-%d %H:%M')
    products = ProductSerializer(many=True)

    class Meta:
        model = Category
        fields = ('category_id', 'category_label',
                  'products_count', 'fetch_date', 'products')
        # fields = '__all__'
