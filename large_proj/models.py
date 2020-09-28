from django.db import models

class Large_proj(models.Model):
    proj_title = models.CharField(max_length=400, default='Project 1')
    proj_desc = models.CharField(max_length=400, default='Copy content')
    proj_img = models.CharField(max_length=400, default='https://i.imgur.com/e4zkPkY.jpg')
    skills = models.CharField(max_length=400, default='UX, design & development')
    url = models.CharField(max_length=400, default='https://www.google.com/')
    url2 = models.CharField(max_length=400, default='https://www.google.com/')
    para_one_title = models.CharField(max_length=400, default='Title')
    para_one_copy = models.CharField(max_length=400, default='Copy content')
    para_one_img = models.CharField(max_length=400, default='https://i.imgur.com/e4zkPkY.jpg')
    para_two_title = models.CharField(max_length=400, default='Title')
    para_two_copy = models.CharField(max_length=400, default='Copy content')
    para_two_img = models.CharField(max_length=400, default='https://i.imgur.com/e4zkPkY.jpg')
    para_three_title = models.CharField(max_length=400, default='Title')
    para_three_copy = models.CharField(max_length=400, default='Copy content')
    para_three_img = models.CharField(max_length=400, default='https://i.imgur.com/e4zkPkY.jpg')

    def __str__(self):
      return f'{self.proj_title}'
