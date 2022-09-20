export const uniqueDates = (tasks) => {
    //Creando el arreglo array
    const unique = [];

    //Recorriendo los elementos guardados
    tasks.forEach(task => {
        //Condicional para agrupar fechas iguales
        if (!unique.includes(task.dateFormat)) unique.push(task.dateFormat);

    });
    return unique
};

//Creando funcion para ordenar las fechas
export const orderDates = (dates) => {

    //Retorno de la funcion
    return dates.sort( (a,b) => {
        //Formateando las fechas
        const firstDate = moment(a, "DD/MM/YYYY");
        const secondDate = moment(b, "DD/MM/YYYY");
        //Retornando la diferencia
        return firstDate - secondDate;
    }

    );
}