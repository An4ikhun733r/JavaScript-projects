(()=>{"use strict";function e(){document.getElementById("add-todo-form").style.display=""}function t(){const e=document.getElementById("add-to-checklist").value;if(""!=e){const t=document.querySelector(".todo-ul"),n=document.createElement("li");n.textContent=e;const o=document.createElement("span");o.className="Remove-checklist-item";const r=document.createTextNode("×");if(n.appendChild(o),o.appendChild(r),t.appendChild(n),document.getElementById("add-to-checklist").value="",document.querySelectorAll("li").length>0){console.log("Inside module if....",document.querySelectorAll("li").length);const e=document.querySelectorAll("li");console.log(e),e.forEach((e=>{e.addEventListener("click",(function(){e.remove()}))}))}}}function n(){const e=document.querySelectorAll("li");for(let t=0;t<e.length;t++)e[t].remove();document.getElementById("add-todo").reset()}Math.pow(10,8);const o=36e5;const r={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},l=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,i=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,c=/^([+-])(\d{2})(?::?(\d{2}))?$/;function a(e){return e?parseInt(e):1}function u(e){return e&&parseFloat(e.replace(",","."))||0}const s=[31,null,31,30,31,30,31,31,30,31,30,31];function d(e){return e%400==0||e%4==0&&e%100!=0}function m(e){const t=function(e){const t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new e.constructor(+e):"number"==typeof e||"[object Number]"===t||"string"==typeof e||"[object String]"===t?new Date(e):new Date(NaN)}(e);return t.setHours(0,0,0,0),t}function g(){return m(Date.now())}let D=[];const f=()=>{let e=document.getElementById("Title").value,t=document.getElementById("Description").value,m=document.getElementById("DueDate").value,f=document.getElementById("Priority").value;if(""==e||""==t||""==m)return void alert("The Title, Desctiption and Due Date are required fields");if(function(e,t){const n=t?.additionalDigits??2,m=function(e){const t={},n=e.split(r.dateTimeDelimiter);let o;if(n.length>2)return t;if(/:/.test(n[0])?o=n[0]:(t.date=n[0],o=n[1],r.timeZoneDelimiter.test(t.date)&&(t.date=e.split(r.timeZoneDelimiter)[0],o=e.substr(t.date.length,e.length))),o){const e=r.timezone.exec(o);e?(t.time=o.replace(e[1],""),t.timezone=e[1]):t.time=o}return t}(e);let g;if(m.date){const e=function(e,t){const n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),o=e.match(n);if(!o)return{year:NaN,restDateString:""};const r=o[1]?parseInt(o[1]):null,l=o[2]?parseInt(o[2]):null;return{year:null===l?r:100*l,restDateString:e.slice((o[1]||o[2]).length)}}(m.date,n);g=function(e,t){if(null===t)return new Date(NaN);const n=e.match(l);if(!n)return new Date(NaN);const o=!!n[4],r=a(n[1]),i=a(n[2])-1,c=a(n[3]),u=a(n[4]),m=a(n[5])-1;if(o)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,u,m)?function(e,t,n){const o=new Date(0);o.setUTCFullYear(e,0,4);const r=7*(t-1)+n+1-(o.getUTCDay()||7);return o.setUTCDate(o.getUTCDate()+r),o}(t,u,m):new Date(NaN);{const e=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(s[t]||(d(e)?29:28))}(t,i,c)&&function(e,t){return t>=1&&t<=(d(e)?366:365)}(t,r)?(e.setUTCFullYear(t,i,Math.max(r,c)),e):new Date(NaN)}}(e.restDateString,e.year)}if(!g||isNaN(g.getTime()))return new Date(NaN);const D=g.getTime();let f,p=0;if(m.time&&(p=function(e){const t=e.match(i);if(!t)return NaN;const n=u(t[1]),r=u(t[2]),l=u(t[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,l)?n*o+6e4*r+1e3*l:NaN}(m.time),isNaN(p)))return new Date(NaN);if(!m.timezone){const e=new Date(D+p),t=new Date(0);return t.setFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),t.setHours(e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()),t}return f=function(e){if("Z"===e)return 0;const t=e.match(c);if(!t)return 0;const n="+"===t[1]?-1:1,r=parseInt(t[2]),l=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,l)?n*(r*o+6e4*l):NaN}(m.timezone),isNaN(f)?new Date(NaN):new Date(D+p+f)}(m)<g())return alert("This date is already passed!"),console.log("Due Date: ",m),void console.log("Current Date: ",g());const p=document.querySelectorAll("li");let y=[];for(let e=0;e<p.length;e++){let t=p[e].textContent.replace("×","");y.push(t)}let h=y.join(", ");return console.log("called createToDo module, creating todo now"),console.log({Title:e,Description:t,DueDate:m,Priority:f,CheckList:h}),console.log("pushed the data in the array"),D.push({Title:e,Description:t,DueDate:m,Priority:f,CheckList:h}),console.log(D),function({Title:e,Description:t,DueDate:n,Priority:o,CheckList:r}){console.log("Saving object to the local storage!"),localStorage.setItem("Title",document.getElementById("Title").value),localStorage.setItem("Description",document.getElementById("Description").value),localStorage.setItem("DueDate",document.getElementById("DueDate").value),localStorage.setItem("Priority",document.getElementById("Priority").value),localStorage.setItem("CheckList",r),function(){const e=document.querySelectorAll(".card");for(let t=0;t<e.length;t++)e[t].remove();const t=document.querySelector(".right-side"),n=document.createElement("div");n.classList.add("card"),t.appendChild(n);let o={Title:localStorage.getItem("Title"),Description:localStorage.getItem("Description"),DueDate:localStorage.getItem("DueDate"),Priority:localStorage.getItem("Priority"),CheckList:localStorage.getItem("CheckList")};for(let e in o){const t=document.createElement("p");t.textContent=`${e}: ${o[e]}`,n.appendChild(t)}}()}({Title:e,Description:t,DueDate:m,Priority:f,CheckList:h}),n(),{Title:e,Description:t,DueDate:m,Priority:f,CheckList:h}};(()=>{console.log("creating array for to dos");let e=[];console.log("pushing name pojects to array");e.push({projectName:[]}),console.log(e)})(),document.querySelector(".add-todo-button").addEventListener("click",e),document.querySelector(".add-to-checklist").addEventListener("click",t),document.querySelector(".reset-button").addEventListener("click",n),document.querySelector(".submit-button").addEventListener("click",f)})();