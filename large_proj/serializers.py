from rest_framework import serializers
from .models import Large_proj

class LargeSerializer(serializers.ModelSerializer):

      class Meta:
        model = Large_proj
        fields = '__all__'