from django.db import models


class Product(models.Model):
  id = models.CharField(max_length=255, primary_key=True)
  offer_price = models.CharField(max_length=255)
  image_url = models.CharField(max_length=255)
  total_reviews = models.CharField(max_length=255)
  description = models.TextField(blank=True)
  title = models.TextField()
  review_rating = models.FloatField()
  end_date = models.CharField(max_length=255, blank=True)
  url = models.CharField(max_length=255)
  normal_price = models.CharField(max_length=255)
  offer_percent = models.FloatField()
  fetch_date = models.DateTimeField(auto_now_add=True)
  # category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, default=None)
  def __str__(self):
    return self.title


class Category(models.Model):
  # products = models.ForeignKey(Product, blank=True, on_delete=models.CASCADE)
  category_id = models.CharField(max_length=255, primary_key=True)
  category_label = models.CharField(max_length=255)
  products_count = models.IntegerField()
  products = models.ManyToManyField(Product, through='Category_product')
  fetch_date = models.DateTimeField(auto_now_add=True)
  def __str__(self):
    return self.category_label

class Category_product(models.Model):
  id = models.AutoField(primary_key=True)
  product_id = models.ForeignKey(Product, db_column='product_id', on_delete = models.CASCADE)
  category_id = models.ForeignKey(Category, db_column='category_id', on_delete=models.CASCADE)
  fetch_date = models.DateTimeField(auto_now_add=True)
