
// links com o html 
const submitForm = document.getElementById('form');
const inputTask = document.getElementById('input');
const listContainer = document.getElementById('listContainer');

submitForm.addEventListener('submit', function(e){
    e.preventDefault(); // previne que o submit apague o input
    
    const newTask = inputTask.value;
    
    // verifica que o input é válido
    if(newTask != ""){

    // cria a lista com as tarefas
    const itemTask = document.createElement('div');
    itemTask.innerHTML = `<p>${newTask}</p><button>x</button>`;
    listContainer.appendChild(itemTask);

    }

});

