from django.db import models

class Large_proj(models.Model):
    para_one_title = models.CharField(max_length=60)
    para_one_copy = models.CharField(max_length=400)
    para_one_link = models.CharField(max_length=200)
    para_two_title = models.CharField(max_length=100)
    para_two_copy = models.CharField(max_length=200)
    para_two_img1 = models.CharField(max_length=100)
    para_two_img2 = models.CharField(max_length=100)
    para_two_img3 = models.CharField(max_length=100)
    para_two_img4 = models.CharField(max_length=100)

    def __str__(self):
      return f'{self.para_one_title}'
