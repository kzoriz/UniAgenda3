from django.contrib import admin
from django.urls import path
from atividades.api import api
from atividades import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", views.index, name="index"),
    path("api/", api.urls),
]
