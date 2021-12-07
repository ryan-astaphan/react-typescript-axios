from django.db import models

# Create your models here.


class Tutorial(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=50)
    published = models.BooleanField()
