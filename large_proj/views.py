# pylint: disable=no-member, no-self-use
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Large_proj
from .serializers import LargeSerializer

class LargeListView(APIView):

    def get(self, _request):
        larges = Large_proj.objects.all()
        serialized_larges = LargeSerializer(larges, many=True)
        return Response(serialized_larges.data, status=status.HTTP_200_OK)

class LargeDetailView(APIView):

    def get(self, _request, pk):
        large = Large_proj.objects.get(pk=pk)
        serialized_large = LargeSerializer(large)
        return Response(serialized_large.data, status=status.HTTP_200_OK)