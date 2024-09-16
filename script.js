
let taskArray = [];
let taskDone = 0;


// querySelectors

const taskInput = document.querySelector('#taskInput');
const addTask = document.querySelector('#addTask');
const message = document.querySelector('#message');
const taskList = document.querySelector('#taskList');
const taskDoneSpan = document.querySelector('#taskDone');

addTask.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        message.textContent = 'Du måste skriva in en uppgift';
    } else {
        message.textContent = '';
        const taskObject = {
            text: taskText,
            done: false
        };
        taskArray.push(taskObject);
        updateList();
        taskInput.value = '';
    }});


    function updateList() {
        taskList.innerHTML = '';
        taskDone = 0;
        taskArray.forEach(function(task, index) {
            const li = document.createElement('li');
            li.textContent = task.text;
            if (task.done) {
                li.classList.add('klart');
                taskDone++;
            }
            li.addEventListener('click', function() {
                task.done = !task.done;
                updateList();
            });
            taskList.appendChild(li);
        });
        taskDoneSpan.textContent = taskDone;
    }
    updateList();
    
