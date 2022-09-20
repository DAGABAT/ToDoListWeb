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

