from ninja import Schema
from datetime import date, time

class AtividadeIn(Schema):
    titulo: str
    descricao: str
    data: date
    hora: time
    status: str = "pendente"

class AtividadeOut(AtividadeIn):
    id: int
