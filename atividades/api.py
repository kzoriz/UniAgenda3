from ninja import NinjaAPI
from .models import Atividade
from .schema import AtividadeIn, AtividadeOut
from django.shortcuts import get_object_or_404

api = NinjaAPI()

@api.get("/atividades", response=list[AtividadeOut])
def listar_atividades(request):
    return Atividade.objects.all()

@api.get("/atividades/{id}", response=AtividadeOut)
def obter_atividade(request, id: int):
    return get_object_or_404(Atividade, id=id)

@api.post("/atividades", response=AtividadeOut)
def criar_atividade(request, dados: AtividadeIn):
    return Atividade.objects.create(**dados.dict())

@api.put("/atividades/{id}", response=AtividadeOut)
def atualizar_atividade(request, id: int, dados: AtividadeIn):
    atividade = get_object_or_404(Atividade, id=id)
    for campo, valor in dados.dict().items():
        setattr(atividade, campo, valor)
    atividade.save()
    return atividade

@api.delete("/atividades/{id}")
def deletar_atividade(request, id: int):
    atividade = get_object_or_404(Atividade, id=id)
    atividade.delete()
    return {"mensagem": "Atividade deletada com sucesso"}
