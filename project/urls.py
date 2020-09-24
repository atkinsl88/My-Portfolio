from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/admin/', admin.site.urls),
    path('api/small/', include('small_proj.urls')),
    path('api/large/', include('large_proj.urls'))
]