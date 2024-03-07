import {parseISO, startOfToday} from 'date-fns'
import { clearForm } from './dom-manip';

let toDoArray = [];

export const createToDo = () => {
    let title = document.getElementById("Title").value;
    let description = document.getElementById("Description").value;
    let dueDate = document.getElementById("DueDate").value;
    let Priority = document.getElementById("Priority").value;

    if (title == "" || description == "" || dueDate == ""){
        alert("The Title, Desctiption and Due Date are required fields");
        return;
    }

    if (parseISO(dueDate) < startOfToday()){
        alert("This date is already passed!");
        console.log("Due Date: ", dueDate);
        console.log("Current Date: ", startOfToday());
        return;
    }

    const nodeListCheckList = document.querySelectorAll("li");
    let CheckListArray = [];
    for (let i = 0; i < nodeListCheckList.length; i++){
        let strippedCheckList = nodeListCheckList[i].textContent.replace("\u00D7", '');
        CheckListArray.push(strippedCheckList);
    }

    let CheckList = CheckListArray.join(", ");

    console.log("called createToDo module, creating todo now");
    console.log({title, description, dueDate, Priority, CheckList});
    console.log("pushed the data in the array");
    toDoArray.push({title, description, dueDate, Priority, CheckList});
    console.log(toDoArray);

    clearForm();
    return {title, description, dueDate, Priority, CheckList};
}