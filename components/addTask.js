import { uniqueDates } from '../services/date.js';
import { checkComplete } from './checkComplete.js';
import { deleteIcon } from './deleteIcon.js';
import { readTasks } from './readTasks.js';

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

      if (value == '' || date == '') {
            return
      }

      //Limpiando los formularios
      input.value = '';
      calendar.value = '';

      //Creando la variable complete
      const complete = false;

      //Creando objeto para almacenar las variables que queremos
      const taskObj = {
            value,
            dateFormat,
            complete,
            id: uuid.v4()
      }

      //vaciando el contenido de la variable list
      list.innerHTML = '';

      //Creo constante para recuperar lo guardado en memoria
      const taskList = JSON.parse(localStorage.getItem('task')) || [];
      //Adiciono a la constante creada los elementos del objeto
      taskList.push(taskObj);

      //Convirtiendo en string el objeto y subiendolo a la memoria local
      localStorage.setItem('task', JSON.stringify(taskList));

      readTasks();
}


export const createTask = ({ value, dateFormat, complete, id }) => {

      const task = document.createElement('li');
      task.classList.add('card');

      const taskContent = document.createElement('div');


      const check = checkComplete(id);

      //Condicional para evaluar complete
      if(complete){
            check.classList.toggle('fas');
            check.classList.toggle('completeIcon');
            check.classList.toggle('far');
      }

      const titleTask = document.createElement('span');
      titleTask.classList.add('task');
      titleTask.innerText = value;
      taskContent.appendChild(check);
      taskContent.appendChild(titleTask);

      //Creando la variable para almacenar la fecha, en span
      const dateElement = document.createElement('span');
      //Adicionando el valor a la variable span
      dateElement.innerHTML = dateFormat;
      task.appendChild(taskContent);
      //Vinculando el nuevo span a lista hija
      task.appendChild(dateElement);
      task.appendChild(deleteIcon(id));
      return task;
};