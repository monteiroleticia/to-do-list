// como fazer o scroll ser no main?
// cursores de clique
// 


const submitForm = document.getElementById('form');
const inputTask = document.getElementById('input');
const listContainer = document.getElementById('listContainer');
const inputBtn = document.getElementById('submit');
const footer = document.getElementById('footer');
const error = document.getElementById('inputAlert');


// ativa o botão 
submitForm.addEventListener('submit', function (e) {
    e.preventDefault(); // previne que o submit apague o input
    const newTask = inputTask.value.trim();

    // como fazer o alert resetar? ou repetir 
    if (newTask == "") {
        error.innerHTML = 'Erro! Digite um texto válido.';
        error.style.display = 'block';

    }

    // verifica que o input é válido
    else if (newTask != "") {

        error.style.display = 'none';
        listContainer.style.display = 'block';

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



        // marca os items feitos  
        // porque isso não funciona fora dessa função? 
        // como faz para criar alternancia?
        itemDiv.addEventListener('click', function () {

            itemTask.style.textDecoration = 'line-through';
            itemTask.style.fontWeight = 'bold';
            itemTask.style.color = '#8ba589';
            itemDiv.style.backgroundColor = '#def0dc';

        });

        itemDiv.addEventListener('dblclick', function () {

            itemTask.style.textDecoration = 'none';
            itemTask.style.fontWeight = 'normal';
            itemTask.style.color = 'black';
            itemDiv.style.backgroundColor = 'white';

        });

        // apaga items
        itemErase.addEventListener('click', function () {

            itemDiv.style.display = 'none';

        });


        const eraseAll = document.getElementById('eraseAll');
        const checkAll = document.getElementById('checkAll');

        // deleta tudo 
        eraseAll.addEventListener('click', function () {

            const taskDiv = document.getElementsByClassName('taskDiv');
            let i;

            for (i = 0; i < taskDiv.length; i++) {
                taskDiv[i].style.display = 'none';
            }

            // firula: arredonda o botão de novo
            footer.style.display = 'none';
            listContainer.style.display = 'none';
            inputBtn.style.borderRadius = '0 0 15px 15px';
        });

        // marca tudo 
        checkAll.addEventListener('click', function () {

            const task = document.getElementsByClassName('task');
            const taskDiv = document.getElementsByClassName('taskDiv');
            let i;

            for (i = 0; i < task.length; i++) {
                task[i].style.textDecoration = 'line-through';
                task[i].style.fontWeight = 'bold';
                task[i].style.color = '#8ba589';
                taskDiv[i].style.backgroundColor = '#def0dc';
            }

        });

        // DRAG AND DROP 

        // Adiciona o atributo que permite a movimentação
        itemDiv.setAttribute("draggable", true);

        //Seleciona o evento de click, define que o elemento pode ser arrastado (guarda a classe numa variável)
        itemDiv.addEventListener("dragstart", dragStart);

        //Seleciona a localização do evento de click e direciona para inserção depois do proximo elemento
        itemDiv.addEventListener('dragover', dragOver);

        // Finaliza o momvimento
        itemDiv.addEventListener("dragend", dragEnd);

        function dragStart(event) {
            dragging = event.target.closest('.taskDiv');
        }

        function dragOver(event) {
            const location = event.target.closest('.taskDiv'); // pegar pela classe!!
            this.parentNode.insertBefore(dragging, location);// this.parentNode equivale a class timeline
        }
        function dragEnd() {
            dragging = null;
            //usamos o dragging = null para dizer que deve parar o movimento

        }


    }

    // limpa o input
    inputTask.value = '';


});


