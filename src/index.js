import ToDoList from './todolist.js';
import * as toDoCheck from './completed.js';
import './style.css';
import EnterIcon from './keyboard_return_black_24dp.svg';
import RefershIcon from './replay_black_24dp.svg';

const divContainer = document.getElementById('todo-container');

const component = () => {
  // Creating todo-container's elements
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

  // Adding classes to elements
  listHeader.classList.add('row');
  rowInput.classList.add('row');
  todoInput.classList.add('todo-input');

  // Adding ids to elements
  todoInput.setAttribute('id', 'todo-input');
  enterButtom.setAttribute('id', 'enter-button');

  // Adding content to the elements
  listTitle.textContent = 'Today`s To Do';
  refreshButtom.src = RefershIcon;
  enterButtom.src = EnterIcon;
  todoInput.setAttribute('type', 'text');
  todoInput.setAttribute('name', 'add-todo');
  todoInput.setAttribute('placeholder', 'Add to your list');
  todoInput.required = true;

  return divContainer;
};

component();
const todo = new ToDoList();
document.getElementById('enter-button').addEventListener('click', todo.add);
todo.loadScreen();

const clearAllCompleted = document.getElementById('todo-bottom');
clearAllCompleted.addEventListener('click', () => {
  toDoCheck.DeleteChecked();
});