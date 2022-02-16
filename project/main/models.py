from django.db import models

class Enterprise(models.Model):
    id = models.AutoField(primary_key = True)
    name = models.CharField(max_length = 50)
    address = models.CharField(max_length = 150, null=True, blank=True)
    nit = models.CharField(max_length = 15, unique = True)
    phone = models.IntegerField(null=True, blank=True)
    
