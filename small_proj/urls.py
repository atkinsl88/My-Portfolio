from django.urls import path
from.views import SmallListView, SmallDetailView

urlpatterns = [
    path('', SmallListView.as_view()),
    path('<int:pk>/', SmallDetailView.as_view())
]