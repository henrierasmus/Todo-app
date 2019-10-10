import { todos } from './index'
import { projectArr, ProjectFactory } from './projects';

const container = document.querySelector('#container');

const displayFunction = (() => {
    const todoCard = document.createElement('div');
    const todoForm = document.createElement('form');

    function _renderTodos() {  
        todoCard.innerHTML="";
        const render = (template, todoCard) => {
            todoCard.innerHTML += template;
        }
        
        todos.forEach(function(todo) { 
            let template =           
                    `Title: ${todo.title}<br>
                    Description: ${todo.description}<br>
                    Due Date: ${todo.dueDate}<br>
                    Priority: ${todo.priorityVal}<br>`;
                
                render(template, todoCard);     
        });
        container.appendChild(todoCard);            
    }

    // function _renderProjectForm() {
        
    // }
    
    function _renderAddTodo() {
        todoForm.innerHTML = 
            `<form>
                Title:<input type="text" name="title" id="title"><br>
                Description:<input type="text" name="description" id="description"> <br>
                Due Date:<input type="date" name="date" id="date"><br>
                Priority:<br><input type="radio" class="priority" name="priority" value="high" checked> High<br>
                        <input type="radio" class="priority" name="priority" value="medium"> Medium<br>
                        <input type="radio" class="priority" name="priority" value="Low"> Low
            </form>
            <div id="submitBtn">
                Submit Todo
            </div>`;
            container.appendChild(todoForm);
    }

    const displayProject = () => {
        console.log('project arr', projectArr)
        const projectDiv = document.createElement('div');
    
        function _renderProject () {
            const render = (template, projectDiv) => {
                projectDiv.innerHTML += template;
            }
            
            projectArr.forEach(function(project) {
                let template = `Is this working? ${project.projectName} `;
                render(template, projectDiv);     
            });
            container.appendChild(projectDiv);
        }
        _renderProject(); 
    }

    return { _renderTodos, _renderAddTodo, todoCard, todoForm, displayProject };
})();




export default displayFunction;