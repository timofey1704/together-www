import os
from tastypie.authentication import Authentication
from tastypie.exceptions import Unauthorized

class CustomApiKeyAuthentication(Authentication):
    def is_authenticated(self, request, **kwargs):
        api_key = request.META.get('HTTP_API_KEY')  
        valid_api_key = os.environ.get('API_KEY')

        if api_key != valid_api_key:
            raise Unauthorized("Wrong api key")
        return True