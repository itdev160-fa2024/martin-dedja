var tasks = [];

var taskStatus = {
    ACTIVE: 'active',
    COMPLETED: 'completed'
};

function Task (id, name, status) {
    this.id = id;
    this.name = name;
    this.status = status;
}

function addTaskElement (task) {
    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    taskEl.setAttribute('id', task.id);
    taskEl.appendChild(textEl);
    listEl.appendChild(taskEl);
}

function addTask (event) {
    var inputEl = document.getElementById('input-task');
    if (inputEl.value != '') {
        var id = 'item-' + tasks.length;
        var task = new Task(id, inputEl.value, taskStatus.ACTIVE);
        tasks.push(task);
        addTaskElement(task);
        inputEl.value = '';
    }
}

function completeTask (event) {
    var taskEl = event.target;
    var id = taskEl.id;
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].status = taskStatus.COMPLETED;
            break;
        }
    }

    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
}

function clickButton (event){
    if (event.keycode === 13) {
        document.getElementById('add-task').click();
    }
}

function init () {
    document.getElementById('add-task').addEventListener('click', addTask);
    document.getElementById('active-list').addEventListener('click', completeTask);
    document.getElementById('input-task').addEventListener('keypress', clickButton);
}

init();