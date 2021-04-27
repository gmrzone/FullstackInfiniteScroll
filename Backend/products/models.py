from django.db import models
import uuid
import os
from django.utils.text import slugify
# Create your models here.

def upload_to(instance, filename):
    return os.path.join(instance.name, filename)
class Company(models.Model):
    id = models.UUIDField(default=uuid.uuid4, unique=True, editable=False, primary_key=True)
    name = models.CharField(max_length=100, db_index=True, null=True, blank=True)
    description = models.CharField(max_length=500, null=True, blank=True)
    email = models.EmailField(max_length=100, null=True, blank=True, db_index=True)
    tagline = models.CharField(max_length=100, db_index=True, null=True, blank=True)
    image = models.ImageField(default="default-product-image.png", upload_to=upload_to)
    slug = models.CharField(max_length=100, null=True, blank=True)
    capital = models.DecimalField(max_digits=12, decimal_places=2)
    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)
    class Meta:
        db_table = "company"
        index_together = ('id', "slug")
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)

        return super().save(*args, **kwargs)
