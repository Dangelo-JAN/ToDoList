import './style.css';
import DotsIcon from './more_vert_black_24dp.svg';
import EnterIcon from './keyboard_return_black_24dp.svg';
import RefershIcon from './replay_black_24dp.svg';

const toDoList = [
  {
    description: 'Do Workout',
    completed: false,
    index: 1,
  },
  {
    description: 'Clean my room',
    completed: false,
    index: 2,
  },
  {
    description: 'Take my breakfast',
    completed: false,
    index: 3,
  },
  {
    description: 'Take my shower',
    completed: false,
    index: 4,
  },
  {
    description: 'Complete all the Microverse day activities',
    completed: false,
    index: 5,
  },
];

function component() {
  // Creating todo-container's elements
  const divContainer = document.getElementById('todo-container');
  const listHeader = document.createElement('div');
  const listTitle = document.createElement('span');
  const refreshButtom = document.createElement('img');
  const rowInput = document.createElement('div');
  const todoInput = document.createElement('input');
  const enterButtom = document.createElement('img');

  // Adding the elements into the todo-container
  divContainer.append(listHeader, rowInput);
  listHeader.append(listTitle, refreshButtom);
  rowInput.append(todoInput, enterButtom);

  toDoList.forEach((todo) => {
    const taskRow = document.createElement('div');
    const checkBox = document.createElement('input');
    const labelTask = document.createElement('label');
    const deleteButtom = document.createElement('img');

    divContainer.appendChild(taskRow);
    taskRow.append(checkBox, labelTask, deleteButtom);
    labelTask.textContent = todo.description;
    deleteButtom.src = DotsIcon;

    taskRow.classList.add('row');
    labelTask.classList.add('label-task');
    checkBox.setAttribute('type', 'checkbox');
  });

  // Adding content to the elements
  listTitle.textContent = 'Today`s To Do';
  refreshButtom.src = RefershIcon;
  enterButtom.src = EnterIcon;
  todoInput.setAttribute('type', 'text');
  todoInput.setAttribute('name', 'add-todo');
  todoInput.setAttribute('placeholder', 'Add to your list');
  todoInput.setAttribute('require', 'true');

  // Adding classes to elements
  listHeader.classList.add('row');
  rowInput.classList.add('row');
  todoInput.classList.add('todo-input');

  const finalBottom = document.createElement('div');
  divContainer.appendChild(finalBottom);
  finalBottom.textContent = 'Clear all completed';
  finalBottom.classList.add('todo-bottom');

  return divContainer;
}

component();