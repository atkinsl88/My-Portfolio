# Generated by Django 3.1.1 on 2020-09-24 12:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Large_proj',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('para_one_title', models.CharField(max_length=60)),
                ('para_one_copy', models.CharField(max_length=400)),
                ('para_one_link', models.CharField(max_length=200)),
                ('para_two_title', models.CharField(max_length=100)),
                ('para_two_copy', models.CharField(max_length=200)),
                ('para_two_img1', models.CharField(max_length=100)),
                ('para_two_img2', models.CharField(max_length=100)),
                ('para_two_img3', models.CharField(max_length=100)),
                ('para_two_img4', models.CharField(max_length=100)),
            ],
        ),
    ]
