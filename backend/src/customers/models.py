from django.db import models
class Customer(models.Model):
    name = models.CharField(max_length=120)
    address = models.TextField()
    phone_number = models.CharField(max_length=10)


def __str__(self):
    return self.name