import { blankProjectLoad } from "./blank-project-load";

export function initialDomManip(){
    const contentDiv = document.querySelector(".content");
    const addButton = document.createElement("button");
    addButton.addEventListener('click', () => {
        
    })
    const projectInfo = document.createElement("div");
    projectInfo.textContent = blankProjectLoad().projectName;
    contentDiv.appendChild(projectInfo);
}