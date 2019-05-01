
// links com o html 
const submitForm = document.getElementById('form');
const inputTask = document.getElementById('input');
const listContainer = document.getElementById('listContainer');
const inputBtn = document.getElementById('submit');
const footer = document.getElementById('footer');
const error = document.getElementById('inputAlert');

// ativa o botão 
submitForm.addEventListener('submit', function (e) {
    e.preventDefault(); // previne que o submit apague o input

    const newTask = inputTask.value;

    // verifica que o input é válido
    if (newTask != "") {

        // cria a lista com as tarefas
        const itemDiv = document.createElement('div');
        const itemTask = document.createElement('p');
        const itemErase = document.createElement('a');

        // cria as classes 
        itemDiv.className = 'taskDiv'
        itemTask.className = 'task';
        itemErase.className = 'erase';

        itemTask.innerHTML = newTask;
        itemErase.innerHTML = 'x';

        listContainer.appendChild(itemDiv);
        itemDiv.appendChild(itemTask);
        itemDiv.appendChild(itemErase);

        // firula: tira o arredondado do botão 
        inputBtn.style.borderRadius = '0px';
        // mostra os botões da lista 
        footer.style.display = 'block';

        // limpa o input
        inputTask.value = '';

        // marca os items feitos  
        // porque isso não funciona fora dessa função? 
        itemTask.addEventListener('click', function() {

            itemTask.style.textDecoration = 'line-through';
            itemTask.style.fontWeight = 'bold';
            itemTask.style.color = '#abc6a8';

        });

        // apaga items
        itemErase.addEventListener('click', function(){

            itemDiv.style.display = 'none'; 

        });

        // apaga todos os items

        const getTasks = document.getElementsByClassName('taskDiv');
    }

    else{

        error.innerHTML = 'Erro! Digite um texto válido.';

    }

});



// marca tarefa


// remove tarefa


// marca tudo


// remove tudo 
