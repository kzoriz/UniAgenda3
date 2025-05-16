
# UniAgenda

Sistema web simples para gerenciamento de atividades, desenvolvido como parte da Atividade 3.  
Implementa um CRUD completo (Criar, Listar, Editar, Excluir) com API REST utilizando Django Ninja e persistência com SQLite. A interface web utiliza HTML, JavaScript puro e o framework CSS Bulma.

---

## Tecnologias Utilizadas

- Python 3.10+
- Django 4.x
- Django Ninja
- SQLite (banco de dados local)
- Bulma (CSS framework)
- HTML + JavaScript (sem bibliotecas externas)

---

## Funcionalidades

- [x] Criar nova atividade
- [x] Listar atividades em cartões (cards)
- [x] Editar atividade com preenchimento do formulário
- [x] Excluir atividade com confirmação
- [x] Atualização dinâmica sem recarregar a página

---

## Estrutura do Projeto

```
uniagenda/
├── manage.py
├── UniAgenda3/
│   ├── settings.py
│   ├── urls.py
├── atividades/
│   ├── models.py
│   ├── api.py
│   ├── schema.py
│   ├── views.py
├── templates/atividades/index.html
└── static/js/script.js
```

---

## Rotas da API

| Método | Rota                  | Descrição                        |
|--------|------------------------|----------------------------------|
| GET    | /api/atividades        | Lista todas as atividades        |
| GET    | /api/atividades/{id}   | Retorna uma atividade específica |
| POST   | /api/atividades        | Cria uma nova atividade          |
| PUT    | /api/atividades/{id}   | Atualiza uma atividade existente |
| DELETE | /api/atividades/{id}   | Exclui uma atividade             |

---

## Como Executar

1. Clone este repositório:
```bash
git clone https://github.com/kzoriz/UniAgenda3
cd UniAgenda3
```

2. Crie e ative um ambiente virtual:
```bash
python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate   # Windows
```

3. Instale as dependências:
```bash
pip install -r requirements.txt
```

4. Aplique as migrações:
```bash
python manage.py migrate
```

5. Inicie o servidor:
```bash
python manage.py runserver
```

6. Acesse no navegador:
```
http://localhost:8000/
```

---

## Link para o Vídeo Explicativo

https://youtu.be/Pz0pd_Tl5Oc?si=dH7p4qJjUWC7Ltlf

---

## Autor

Desenvolvido como parte da Atividade 3 – CRUD com API e banco de dados.
