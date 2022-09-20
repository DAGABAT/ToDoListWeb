import { createTask } from "./addTask.js";
import { uniqueDates, orderDates } from "../services/date.js";
import dateElement from "./dateElement.js";

//Funcion para leer la informacion guardada en la memoria
export const readTasks = () => {

    //Vinculando lista padre
    const list = document.querySelector('[data-list]');
    //Verificando el elemento en consola
    //console.log(list);

    //Convirtiendo el archivo de memoria en un objeto js.
    const taskList = JSON.parse(localStorage.getItem('task')) || [];

    //Evaluando la funcion unique Dates
    const dates = uniqueDates(taskList);
    //console.log(taskList);

    //Ordenando las fechas
    orderDates(dates);  

    //Mostrando el log de dates
    //console.log(dates);

    //recorriendo el arreglo uniques
    dates.forEach((date) => {
        //console.log(date);
        //Creando objeto para fecha formateada de date
        const dateMoment = moment(date, "DD/MM/YYYY");
        //console.log(dateMoment);

        //Anexando elemento date a la lista
        list.appendChild(dateElement(date));
        //Recorriendo la lista de tareas
        taskList.forEach((task) => {
            //Creando objeto para fecha formateada
            const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
            //console.log(taskDate);

            //Metodo de diferencia entre fechas
            const diff = dateMoment.diff(taskDate);
            //console.log(diff);
            
            //Condicional para adicionar si son iguales fechas
            if (diff == 0) {
                 //Adicionando a la lista de tareas en la pagina
            list.appendChild(createTask(task));
            }          
        })
    });


}
