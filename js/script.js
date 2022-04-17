// variaveis
const txtTarefas = document.querySelector("#txt-tarefa");
const buttonCriar = document.querySelector("#criar-tarefa");
const listOl = document.querySelector("#lista");

//variavel remover
const buttonsSection = document.querySelector('#buttons');
const removeCheck = document.createElement('button');
removeCheck.className = "removerButton";
removeCheck.innerText = "Remove Tudo";
buttonsSection.appendChild(removeCheck);

//Adicionando lista
function addLista() {
  buttonCriar.addEventListener("click", () => {
    if(txtTarefas.value === '') {
      alert('[Erro] - Valor invalido');
    } else {
      const newLista = document.createElement('li');
      newLista.classList = 'list';
      listOl.appendChild(newLista);
      newLista.innerHTML = txtTarefas.value;
      txtTarefas.value = '';
    }
  });
}

//Clicando na lista - dois clique e vai aparecer um alert
function clickList() {
  listOl.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

//removendo lista
function removeList() {
  removeCheck.addEventListener('click', () => {
    const listUl = document.querySelectorAll('#lista>li');
    for(let index = 0; index < listUl.length; index +=1) {
      const listTask = listUl[index];
      listTask.parentNode.removeChild(listTask);
    }
  })
}

//selecionar tudo
function selectedDesativate() {
  listOl.addEventListener('click', (event) => {
    const selectedLi = document.querySelectorAll('.selected');
    for (let index = 0; index < selectedLi.length; index += 1) {
      selectedLi[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

addLista();
clickList();
removeList();
selectedDesativate();