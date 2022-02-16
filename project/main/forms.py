from dataclasses import field
from pyexpat import model
from django import forms
from .models import Enterprise

class EnterpriseForm(forms.ModelForm):
    class Meta:
        model = Enterprise
        fields = '__all__'