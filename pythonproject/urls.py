from django.contrib import admin
from django.urls import path, include
from django.conf import settings


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/', include('account.urls'))
]

admin.site.site_header = 'Ambulance Management System'
admin.site.site_title = 'AMS'
admin.site.index_title='AMS Administration'