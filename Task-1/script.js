const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskText}</span>
      <i class="fas fa-trash delete-button"></i>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-button')) {
    const listItem = event.target.parentElement;
    taskList.removeChild(listItem);
  }
});
