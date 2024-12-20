from django.db import models
from shop.models import Request
from tastypie.resources import ModelResource
from tastypie.authorization import Authorization
from tastypie.exceptions import BadRequest
from .authentication import CustomApiKeyAuthentication


class RequestsResource(ModelResource):
    class Meta:
        queryset = Request.objects.all()
        resource_name = 'send-request'
        allowed_methods = ['post']
        authorization = Authorization()
        # authentication = CustomApiKeyAuthentication()

    def obj_create(self, bundle, **kwargs):
     
        required_fields = ['request_type', 'name', 'surname']
        for field in required_fields:
            if field not in bundle.data or not bundle.data[field]:
                raise BadRequest(f"Поле '{field}' является обязательным.")

      
        # if 'email' in bundle.data and bundle.data['email']:
        #     if '@' not in bundle.data['email']:  
        #         raise BadRequest("Неверный формат email.")

        
        return super().obj_create(bundle, **kwargs)