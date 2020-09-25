from django.contrib import admin
from django.urls import path, include, re_path
from .views import index

urlpatterns = [
    path('api/admin/', admin.site.urls),
    path('api/small/', include('small_proj.urls')),
    path('api/large/', include('large_proj.urls')),
    re_path(r'^.*$', index)
]