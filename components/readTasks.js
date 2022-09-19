import { createTask } from "./addTask.js";

//Funcion para leer la informacion guardada en la memoria
export const readTasks = () => {

    //Vinculando lista padre
    const list = document.querySelector('[data-list]');
    //Verificando el elemento en consola
    console.log(list);

    //Convirtiendo el archivo de memoria en un objeto js.
    const taskList = JSON.parse(localStorage.getItem('task')) || [];

    //Convirtiendo cada elemento en un elemento separado
    taskList.forEach((task) => {
        //Mostrando el resultado de la conversion.
        list.appendChild(createTask(task));
    });
}
