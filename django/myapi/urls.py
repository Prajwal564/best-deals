from django.urls import include, path
from rest_framework import routers
from . import views


router = routers.DefaultRouter()
# router.register('product', views.ProductViewSet)
router.register('deals', views.CategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
