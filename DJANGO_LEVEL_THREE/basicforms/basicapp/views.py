# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from . import forms

from django.views.decorators.csrf import csrf_exempt

# Create your views here.

def index(request):
    return render(request, 'basicapp/index.html')

@csrf_exempt
def form_name_view(request):
    form = forms.FormName()
    return render(request, 'basicapp/form_page.html', {'form': form})