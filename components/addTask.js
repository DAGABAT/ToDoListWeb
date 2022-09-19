import { checkComplete } from './checkComplete.js';
import { deleteIcon } from './deleteIcon.js';

export const addTask = (evento) => {
  //Desactivando el default
  evento.preventDefault();
  //Vinculando los formularios de la pagina
  const list = document.querySelector('[data-list]');
  const input = document.querySelector('[data-form-input]');
  const calendar = document.querySelector('[data-form-date]');
  //Guardando los valores de los formularios
  const value = input.value;
  const date = calendar.value;
  const dateFormat = moment(date).format('DD/MM/YYYY');
  //Limpiando los formularios
  input.value = '';
  calendar.value = '';
  //Creando objeto para almacenar las variables que queremos
  const taskObj = {
    value,
    dateFormat
  }
  //Creo constante para recuperar lo guardado en memoria
  const taskList = JSON.parse(localStorage.getItem('task')) || [];
  //Adiciono a la constante creada los elementos del objeto
  taskList.push({ value, dateFormat });

  //Convirtiendo en string el objeto y subiendolo a la memoria local
  localStorage.setItem('task', JSON.stringify(taskList));


  //Llamando la funcion createTask
  const task = createTask(taskObj);
  list.appendChild(task);
}


export const createTask = ({ value, dateFormat }) => {

  const task = document.createElement('li');
        task.classList.add('card');

  const taskContent = document.createElement('div');



  const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);
  
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