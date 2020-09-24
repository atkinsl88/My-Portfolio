from django.db import models

class Small_proj(models.Model):
    proj_short_title = models.CharField(max_length=60)
    proj_short_copy = models.CharField(max_length=400)
    proj_short_img = models.CharField(max_length=200)
    proj_short_link1 = models.CharField(max_length=100)
    proj_short_link2 = models.CharField(max_length=100)

    def __str__(self):
      return f'{self.proj_short_title}'
