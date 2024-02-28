import { blankProjectLoad } from "./blank-project-load";

export function initialDomManip(){
    const contentDiv = document.querySelector(".content");
    const header = document.createElement("h1");
    header.textContent = "ToDoList";
    contentDiv.appendChild(header);

    const projectInfo = document.createElement("div");
    projectInfo.textContent = blankProjectLoad().projectName;
    contentDiv.appendChild(projectInfo);
}