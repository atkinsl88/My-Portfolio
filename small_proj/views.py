# pylint: disable=no-member, no-self-use,raise-missing-from
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Small_proj
from .serializers import SmallSerializer

class SmallListView(APIView):

    def get(self, _request):
        smalls = Small_proj.objects.all()
        serialized_smalls = SmallSerializer(smalls, many=True)
        return Response(serialized_smalls.data, status=status.HTTP_200_OK)

class SmallDetailView(APIView):

    def get(self, _request, pk):
        small = Small_proj.objects.get(pk=pk)
        serialized_small = SmallSerializer(small)
        return Response(serialized_small.data, status=status.HTTP_200_OK)