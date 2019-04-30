
const submitForm = document.getElementById('form');
const inputTask = document.getElementById('input');
const listContainer = document.getElementById('listContainer');

submitForm.addEventListener('submit', function(e){
    e.preventDefault();
    
    const newTask = inputTask.value;
    if(newTask != ""){

    const itemTask = document.createElement('div');
    itemTask.innerHTML = `<p>${newTask}</p><button>x</button>`;
    listContainer.appendChild(itemTask);
    
    }

});

