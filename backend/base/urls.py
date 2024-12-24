from django.contrib import admin
from django.urls import path, include
from tastypie.api import Api
from api.models import RequestsResource

api = Api(api_name='v1')
request_resourse = RequestsResource()

api.register(request_resourse) #api/v1/send-request

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(api.urls))
]