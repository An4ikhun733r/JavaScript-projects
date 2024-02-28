import { blankProjectLoad } from "./blank-project-load";
import { creatToDo } from "./create-to-do";
import { initialDomManip } from "./initial-dom-manip";

blankProjectLoad();

initialDomManip();

let firsttodo = creatToDo("grocery", "get groceryies", "4/15/2023", "low", "eggs, milk, juice")
console.log("Show me first ToDo: ", firsttodo)