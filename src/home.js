import { projectArr, ProjectFactory } from './projects';

const container = document.querySelector('#container');

const displayFunction = (() => {
    const todoCard = document.createElement('div');
    const todoForm = document.createElement('form');
    const addButton = document.createElement('button');
    const projectPageBtn = document.createElement('button');

    // there is a problem with this function, renders to many elements on the DOM
    // the fucnnction fires for every project, need to look at validation in index.js
    function _renderTodos () {  
        todoCard.innerHTML = "";
        const render = (template, todoCard) => {
            todoCard.innerHTML += template;
        }
       
        console.log('render the todos here');
        projectArr.forEach((project) => {
            console.log('!!!!project in homejs', projectArr)
            project.todos.forEach((todo) => {
                console.log('#####project.todo in home js', todo)
                let template =           
                    `Title: ${todo.title}<br>
                    Description: ${todo.description}<br>
                    Due Date: ${todo.dueDate}<br>
                    Priority: ${todo.priorityVal}<br>`;
                
                render(template, todoCard);  
            });               
        });
        container.appendChild(todoCard);            
    }
    
    function _renderAddTodo () {
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

    function _renderAddProject () {
        const projectForm = document.createElement('div');
        projectForm.innerHTML = 
        `<form>
            Title:<input type="text" name="project-name" id="project-name"><br>
        </form>
        <div id="submitP">Submit Project</div>`;
        container.appendChild(projectForm);
    }

    const addProjectButton = () => {
        addButton.textContent = 'Add a Project';
        container.appendChild(addButton);
    }

    const goToProjects = () => {
        projectPageBtn.textContent = 'Go to projects';
        container.appendChild(projectPageBtn);
        projectPageBtn.setAttribute('id', 'project-page-button');
    }

    const displayProjectsPage = () => {
        let projectDiv = document.createElement('div');

        const render = (template, projectDiv) => {
            projectDiv.innerHTML += template;
        }
        
        projectArr.forEach(function(project) {
            let template = `<div class="project-div">${project.projectName}</div>`;
            render(template, projectDiv);  
        });
        container.appendChild(projectDiv);  

    }

    const displayProject = () => {
        const projectView = document.createElement('div');
        console.log('displayproject function fired')
        projectArr.forEach((project) => {
            projectView.innerHTML = `<div class="project-name-div">${project.projectName}</div> <button id="add-todo-form">Add todo</button>`;
        });        
        container.appendChild(projectView);
    }
    
    const resetDom = () => {
        container.innerHTML = '';
    }

    return { 
        _renderTodos, 
        _renderAddTodo, 
        todoCard, 
        todoForm, 
        displayProjectsPage, 
        _renderAddProject, 
        addProjectButton,
        addButton,
        resetDom,
        displayProject,
        goToProjects,
    };
})();




export default displayFunction;