from django.shortcuts import render, redirect
from django.core import serializers
from .models import Enterprise
from .forms import EnterpriseForm

def enterprise_detail(request):
    enterprises = Enterprise.objects.all()
    enterprises_json = serializers.serialize('json', enterprises)
    return render(
        request,
        'enterprises.html',
        context={
            'enterprises': enterprises_json,
            'enterprise': {}
        })

def enterprise_register(request):
    print(request)
    if request.method == 'GET':
        return redirect('index')
    else:
        try:    
            form = EnterpriseForm(request.POST)
            context = {
                'form': form
            }
            if form.is_valid():
                form.save()
                return redirect('index')
        except:
            return redirect('index')

def enterprise_edit(request, id):
    enterprises = Enterprise.objects.all()
    enterprises_json = serializers.serialize('json', enterprises)
    enterprise = Enterprise.objects.get(id = id)
    enterprise_json = serializers.serialize('json', [enterprise])
    if request.method == 'GET':
        return render(
            request,
            'enterprises.html',
            context={
                'enterprises': enterprises_json,
                'enterprise': enterprise_json
            }
        )
    else:
        form = EnterpriseForm(request.POST, instance = enterprise)
        if form.is_valid():
            form.save()
            return redirect('index')

def enterprise_delete(request, id):
    enterprise = Enterprise.objects.get(id = id)
    enterprise.delete()
    return redirect('index')