// set local storage item
// localStorage.setItem('name', 'Joih');
// localStorage.setItem('age', '30');

// set session storage item
// sessionStorage.setItem('name', 'Joih');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// Clear local storage
// localStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener('submit',
function(e){
    const task = document.getElementById('task').value;
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        // console.log(typeof localStorage.getItem('tasks'));
        tasks = JSON.parse(localStorage.getItem('tasks'));
        // console.log(typeof tasks);
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    alert('Task saved');

    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(task => console.log(task));