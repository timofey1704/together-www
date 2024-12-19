from django.db import models

class Request(models.Model):
    request_type = models.CharField(max_length=20)
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    email = models.CharField(max_length=255, null=True, blank=True)
    phone_number = models.CharField(max_length=30, null=True, blank=True)
    
    class Meta:
        verbose_name = "Review"
        verbose_name_plural = "Reviews"
        
    def __str__(self):
        return f'{self.request_type} - {self.phone_number}'        