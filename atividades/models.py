from django.db import models

class Atividade(models.Model):
    titulo = models.CharField(max_length=200)
    descricao = models.TextField()
    data = models.DateField()
    hora = models.TimeField()
    status = models.CharField(max_length=20, default='pendente')

    def __str__(self):
        return self.titulo
