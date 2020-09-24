from django.urls import path
from.views import LargeListView, LargeDetailView

urlpatterns = [
    path('', LargeListView.as_view()),
    path('<int:pk>/', LargeDetailView.as_view())
]