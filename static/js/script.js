function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.startsWith(name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

const csrftoken = getCookie('csrftoken');
const API = '/api/atividades';

const form = document.getElementById('formAtividade');
const inputId = document.getElementById('atividadeId');
const inputTitulo = document.getElementById('titulo');
const inputDescricao = document.getElementById('descricao');
const inputData = document.getElementById('data');
const inputHora = document.getElementById('hora');
const lista = document.getElementById('listaAtividades');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const atividade = {
    titulo: inputTitulo.value,
    descricao: inputDescricao.value,
    data: inputData.value,
    hora: inputHora.value,
    status: 'pendente'
  };

  const id = inputId.value;
  const url = id ? `${API}/${id}` : API;
  const metodo = id ? 'PUT' : 'POST';

  console.log("Enviando para:", url, "Método:", metodo);

  await fetch(url, {
    method: metodo,
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken
    },
    body: JSON.stringify(atividade)
  });

  form.reset();
  inputId.value = '';
  carregarAtividades();
});

async function carregarAtividades() {
  const res = await fetch(API);
  const atividades = await res.json();

  lista.innerHTML = '';
  atividades.forEach(atividade => {
    const coluna = document.createElement('div');
    coluna.className = 'column is-4';

    coluna.innerHTML = `
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">${atividade.titulo}</p>
        </header>
        <div class="card-content">
          <div class="content">
            <p><strong>Descrição:</strong> ${atividade.descricao}</p>
            <p><strong>Data:</strong> ${atividade.data}</p>
            <p><strong>Hora:</strong> ${atividade.hora}</p>
            <p><strong>Status:</strong> <span class="tag is-info">${atividade.status}</span></p>
          </div>
        </div>
        <footer class="card-footer">
          <a class="card-footer-item has-text-warning" onclick="editarAtividade(${atividade.id})">Editar</a>
          <a class="card-footer-item has-text-danger" onclick="deletarAtividade(${atividade.id})">Excluir</a>
        </footer>
      </div>
    `;

    lista.appendChild(coluna);
  });
}

async function editarAtividade(id) {
  console.log("EDITANDO ID:", id);
  const res = await fetch(`${API}/${id}`);
  const atividade = await res.json();

  inputId.value = atividade.id;
  inputTitulo.value = atividade.titulo;
  inputDescricao.value = atividade.descricao;
  inputData.value = atividade.data;
  inputHora.value = atividade.hora;
}

async function deletarAtividade(id) {
  console.log("EDITANDO ID:", id);
  if (confirm('Deseja realmente excluir esta atividade?')) {
    await fetch(`${API}/${id}`, {
      method: 'DELETE',
      headers: {
        'X-CSRFToken': csrftoken
      }
    });
    carregarAtividades();
  }
}

function cancelarEdicao() {
  form.reset();
  inputId.value = '';
}

document.addEventListener('DOMContentLoaded', carregarAtividades);
