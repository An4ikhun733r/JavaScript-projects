import { blankProjectLoad } from "./blank-project-load";
import { displayTheForm, addItemToCheckList, clearForm } from "./dom-manip";
import { createToDo } from "./create-to-do";

blankProjectLoad();

//initialDomManip();

let clickEventsModule = (function() {
    const addNewToDo = document.querySelector(".add-todo-button");
    addNewToDo.addEventListener("click", displayTheForm);

    const addToCheckList = document.querySelector(".add-to-checklist");
    addToCheckList.addEventListener("click", addItemToCheckList);

    const clearButton = document.querySelector(".reset-button");
    clearButton.addEventListener("click", clearForm);

    const submitButton = document.querySelector(".submit-button");
    submitButton.addEventListener("click", createToDo)
})();

let ToDo = createToDo("Homework", "2 exercises", "08.03", "High", "1st Exercise, 2nd Exercise");
console.log("Properties of ToDo", ToDo);

