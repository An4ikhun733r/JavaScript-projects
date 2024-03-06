import { blankProjectLoad } from "./blank-project-load";

export function DisplayDefaultProject(){
    const projectInfo = document.createElement("div");
    projectInfo.textContent = blankProjectLoad().projectName;
    contentDiv.appendChild(projectInfo);
}

export function displayTheForm(){
    document.getElementById("add-todo-form").style.display = "";
}

export function addItemToCheckList(){
    const addItem = document.getElementById("add-to-checklist").value;

    if(addItem != ""){
        const ul = document.querySelector(".todo-ul");
        const li = document.createElement("li");
        li.textContent = addItem;
        const span = document.createElement("span");
        span.className = "Remove-checklist-item";
        const removeIcon = document.createTextNode("\u00D7");
        li.appendChild(span);
        span.appendChild(removeIcon);
        ul.appendChild(li);
        document.getElementById("add-to-checklist").value = ""

        if (document.querySelectorAll("li").length > 0){
            console.log("Inside module if....", document.querySelectorAll("li").length);
            const nodeListCheckList = document.querySelectorAll("li");
            console.log(nodeListCheckList);

            nodeListCheckList.forEach(checkListItem => {
                checkListItem.addEventListener("click", function removeItemFromCheckList() {
                    checkListItem.remove();
                })
            })
        }
    } else return;
}

export function clearForm(){
    const nodeListCheckList = document.querySelectorAll("li");
    for (let i = 0; i < nodeListCheckList.length; i++){
        nodeListCheckList[i].remove();
    }
    document.getElementById("add-todo").reset();
}