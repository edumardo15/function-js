// Obtendo referências aos elementos do formulário e da lista de tarefas
const tarefaForm = document.getElementById('tarefaForm');
const tarefaN = document.getElementById('tarefaN');
const tarefaD = document.getElementById('tarefaD');
const tarefaT = document.getElementById('tarefaT');
const tarefaList = document.getElementById('tarefaList');

// Adicionando um listener de evento para o envio do formulário
tarefaForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Impede o comportamento padrão de recarregar a página ao enviar o formulário

  // Obtendo os valores dos campos do formulário
  const tarefaName = tarefaN.value;
  const tarefaDate = tarefaD.value;
  const tarefaTime = tarefaT.value;

  // Criando um novo elemento de lista (li) para a nova tarefa
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <div class="tarefa-name">${tarefaName}</div>
    <div class="tarefa-date">${tarefaDate}</div>
    <div class="tarefa-time">${tarefaTime}</div>
    <input type="checkbox" class="tarefa-completa">
    <button class="tarefa-delete">Excluir</button>
  `;

  // Adicionando o novo elemento de lista à lista de tarefas
  tarefaList.appendChild(listItem);

  // Limpa os campos do formulário
  tarefaN.value = '';
  tarefaD.value = '';
  tarefaT.value = '';
});

// Adicionando um listener de evento para a lista de tarefas
tarefaList.addEventListener('click', function (e) {
  const target = e.target;

  // Verificando se o elemento clicado é um botão de exclusão de tarefa
  if (target.classList.contains('tarefa-delete')) {
    const listItem = target.parentElement;
    // Remove o elemento de lista (li) correspondente à tarefa
    tarefaList.removeChild(listItem);
  }
});