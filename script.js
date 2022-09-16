import checkComplete from './components/checkComplete.js';
import deleteIcon from './components/deleteIcon.js';

const btn = document.querySelector('[data-form-btn]');

const addTask = (evento)=>{
  const list = document.querySelector('[data-list]');
  //Llamando la funcion createTask
  const task = createTask(evento);
  list.appendChild(task);

}

const createTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector('[data-form-input]');
  const calendar = document.querySelector('[data-form-date]');
  const date = calendar.value;
  const dateFormat = moment(date).format('DD/MM/YYYY');
  const value = input.value;
  const task = document.createElement('li');
  task.classList.add('card');
  input.value = '';
  //backticks
  const taskContent = document.createElement('div');

  const titleTask = document.createElement('span');
  titleTask.classList.add('task');
  titleTask.innerText = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);
  // task.innerHTML = content;
  //Creando la variable para almacenar la fecha, en span
  const dateElement = document.createElement('span');
  //Adicionando el valor a la variable span
  dateElement.innerHTML = dateFormat;
  task.appendChild(taskContent);
  //Vinculando el nuevo span a lista hija
  task.appendChild(dateElement);
  task.appendChild(deleteIcon());
  return task;
};

//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);
