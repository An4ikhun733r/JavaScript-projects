(()=>{"use strict";function e(){document.getElementById("add-todo-form").style.display=""}function t(){const e=document.getElementById("add-to-checklist").value;if(""!=e){const t=document.querySelector(".todo-ul"),o=document.createElement("li");o.textContent=e;const c=document.createElement("span");c.className="Remove-checklist-item";const l=document.createTextNode("×");if(o.appendChild(c),c.appendChild(l),t.appendChild(o),document.getElementById("add-to-checklist").value="",document.querySelectorAll("li").length>0){console.log("Inside module if....",document.querySelectorAll("li").length);const e=document.querySelectorAll("li");console.log(e),e.forEach((e=>{e.addEventListener("click",(function(){e.remove()}))}))}}}function o(){const e=document.querySelectorAll("li");for(let t=0;t<e.length;t++)e[t].remove();document.getElementById("add-todo").reset()}let c=[];(()=>{console.log("creating array for to dos");let e=[];console.log("pushing name pojects to array");e.push({projectName:[]}),console.log(e)})(),document.querySelector(".add-todo-button").addEventListener("click",e),document.querySelector(".add-to-checklist").addEventListener("click",t),document.querySelector(".reset-button").addEventListener("click",o);let l=(n="Homework",d="2 exercises",r="08.03",i="High",s="1st Exercise, 2nd Exercise",console.log("called createToDo module, creating todo now"),c.push({title:n,description:d,date:r,priority:i,checklist:s}),console.log("pushed the data in the array"),console.log(c),{title:n,description:d,date:r,priority:i,checklist:s});var n,d,r,i,s;console.log("Properties of ToDo",l)})();