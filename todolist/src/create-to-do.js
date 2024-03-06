let toDoArray = [];

export const createToDo = (title, description, date, priority, checklist) => {
    console.log("called createToDo module, creating todo now");
    toDoArray.push({title, description, date, priority,checklist});
    console.log("pushed the data in the array");
    console.log(toDoArray);
    return {title, description, date, priority, checklist};
}