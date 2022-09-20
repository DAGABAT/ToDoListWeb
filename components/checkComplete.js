export const checkComplete = (id) => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  i.addEventListener('click',(evento) => completeTask(evento,id));
  return i;
};
// Immediately invoked function expression IIFE
const completeTask = (event, id) => {
  const element = event.target;
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
  
  //Obteniendo tasks de localStorage
  const tasks = JSON.parse(localStorage.getItem('task'));
  
  //Identificando el indice de lo clickeado
  const index = tasks.findIndex( item => item.id == id);
  console.log(index);
  tasks[index]['complete'] = !tasks[index]['complete'];
  console.log(tasks);
  localStorage.setItem('task',JSON.stringify (tasks));
};
