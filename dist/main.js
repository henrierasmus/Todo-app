!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);const r=[],n=document.querySelector("#container");var d=(()=>{const e=document.createElement("div"),t=document.createElement("form"),o=document.createElement("button"),d=document.createElement("button");const c=()=>{n.innerHTML="",console.log("dom reset")};return{_renderTodos:function(){e.innerHTML="",r.forEach(t=>{t.todos.forEach(t=>{((e,t)=>{t.innerHTML+=e})(`Title: ${t.title}<br>\n                    Description: ${t.description}<br>\n                    Due Date: ${t.dueDate}<br>\n                    Priority: ${t.priorityVal}<br>`,e)})}),n.appendChild(e)},_renderAddTodo:function(){t.innerHTML='<form>\n                Title:<input type="text" name="title" id="title"><br>\n                Description:<input type="text" name="description" id="description"> <br>\n                Due Date:<input type="date" name="date" id="date"><br>\n                Priority:<br><input type="radio" class="priority" name="priority" value="high" checked> High<br>\n                        <input type="radio" class="priority" name="priority" value="medium"> Medium<br>\n                        <input type="radio" class="priority" name="priority" value="Low"> Low\n            </form>\n            <div id="submitBtn">\n                Submit Todo\n            </div>',n.appendChild(t)},todoCard:e,todoForm:t,displayProjectsPage:()=>{let e=document.createElement("div");e.innerHTML="";r.forEach((function(t){((e,t)=>{t.innerHTML+=e})(`<div class="project-div">${t.projectName}</div>`,e)})),n.appendChild(e)},_renderAddProject:function(){const e=document.createElement("div");e.innerHTML='<form>\n            Title:<input type="text" name="project-name" id="project-name"><br>\n        </form>\n        <div id="submitP">Submit Project</div>',n.appendChild(e)},addProjectButton:()=>{o.textContent="Add a Project",n.appendChild(o)},addButton:o,resetDom:c,displayProject:()=>{const e=document.createElement("div");c(),r.forEach(t=>{e.innerHTML=`<div class="project-name-div">${t.projectName} ${t.todos}</div> <button id="add-todo-form">Add todo</button>`}),n.appendChild(e)},goToProjects:()=>{d.textContent="Go to projects",n.appendChild(d),d.setAttribute("id","project-page-button")}}})();o.d(t,"todoFactory",(function(){return c}));document.querySelector("#container");const c=(e,t,o,r)=>{return{title:e,description:t,dueDate:o,priorityVal:r,complete:!1,notes:"",project:"default"}},i=()=>{document.addEventListener("click",e=>{e.target.matches("#submitBtn")&&(()=>{const e=document.querySelector("#title").value,t=document.querySelector("#description").value,o=document.querySelector("#date").value,n=c(e,t,o,(()=>{let e;const t=document.querySelectorAll(".priority");for(let o=0;o<t.length;o++)if(t[o].checked){e=t[o].value;break}return e})());document.querySelector(".project-name-div");r.forEach(e=>{const t=document.querySelector(".project-name-div");e.projectName===t?(e.todos.push(n),console.log("todo array of project",e.todos),console.log("projectArr",r),d._renderTodos()):console.log("error")})})()})};let a,u=[...document.querySelectorAll(".project-div")];const l=()=>{document.querySelector("#submitP").addEventListener("click",()=>{d.displayProjectsPage(),(()=>{const e=document.querySelector("#project-name").value;a=(e=>{return{projectName:e,todos:[]}})(e),r.push(a),r.forEach((e,t)=>{e.id=t+1}),d.displayProjectsPage()})(),m()})},p=()=>{document.querySelector("#add-todo-form").addEventListener("click",()=>{d._renderAddTodo(),i()})},s=()=>{document.querySelector("#project-page-button").addEventListener("click",m)},m=()=>{d.resetDom(),d.addProjectButton(),u=[...document.querySelectorAll(".project-div")],d.displayProjectsPage(),d.addButton.addEventListener("click",()=>{d.resetDom(),d._renderAddProject(),l()}),document.addEventListener("click",e=>{console.log(e.target),e.target.matches(".project-div")&&(r.forEach(t=>{t.projectName===e.target.textContent&&d.displayProject()}),p(),d.goToProjects(),s())}),console.log(r)};d.goToProjects(),s()}]);