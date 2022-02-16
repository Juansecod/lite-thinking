from unicodedata import name
from django.urls import path
from django.views import generic
from . import views

urlpatterns = [
    path('', views.enterprise_detail, name='index'),
    path('register/', views.enterprise_register),
    path('edit/<int:id>/', views.enterprise_edit),
    path('update/<int:id>/', views.enterprise_edit),
    path('delete/<int:id>/', views.enterprise_delete),
]
