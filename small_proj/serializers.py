from rest_framework import serializers
from .models import Small_proj

class SmallSerializer(serializers.ModelSerializer):

      class Meta:
        model = Small_proj
        fields = '__all__'