let noTasks = document.querySelectorAll('h1')[1];
let count_id = 0;
let deleteTaskButton
let counter = Number(localStorage.getItem('counter'));

function deleteTask(event){
    const thisTask = event.target.parentElement;
    const thisId = thisTask.id;

    counter--;
    localStorage.setItem('counter', counter);

    localStorage.removeItem(`description${thisId}`);
    localStorage.removeItem(`main${thisId}`);

    thisTask.remove();

    if(counter === 0){
        noTasks.innerText = 'Повидаляв всі задачі, бездельник!🙄'
    }

}


if(localStorage.getItem('counter') === '0' || localStorage.getItem('counter') === null) {
    noTasks.innerText = "Поки що у вас нема задач😐"
}


else{
    for(let i = 0; i < Number(localStorage.getItem('counter')); i++){
        count_id++;

        let taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.id = count_id;
        document.body.appendChild(taskDiv);

        deleteTaskButton = document.createElement('h3');
        deleteTaskButton.className = 'delete_task';
        deleteTaskButton.innerHTML = '&times;';
        taskDiv.appendChild(deleteTaskButton);

        let main = document.createElement('h1');
        main.innerText = localStorage.getItem(`main${i + 1}`);
        taskDiv.appendChild(main);

        let description = document.createElement('p');
        description.innerText = localStorage.getItem(`description${i + 1}`);
        taskDiv.appendChild(description);

        deleteTaskButton.addEventListener('click', deleteTask);
    }
}

