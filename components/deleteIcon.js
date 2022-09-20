import { readTasks } from "./readTasks.js";

export const deleteIcon = (id) => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', ()=> deleteTask(id));
  return i;
};

const deleteTask = (id) => {
  //Vinculando el padre de la lista
  const ul = document.querySelector('[data-list]')
  const tasks = JSON.parse(localStorage.getItem('task'));
  const index = tasks.findIndex( (item)=> item.id == id );
  tasks.splice(index,1);
  //Limpiando la lista publicada
  ul.innerHTML = '';
  localStorage.setItem('task', JSON.stringify(tasks));
  readTasks();
};
