import { projectArr, ProjectFactory } from './projects';

const container = document.querySelector('.container');

const displayFunction = (() => {
    const todoCard = document.createElement('div');
    const todoForm = document.createElement('form');
    const addButtonDiv = document.createElement('div');
    const projectPageBtn = document.createElement('button');
    const homePageHeading = document.createElement('div');
    const projectContainer = document.createElement('div');
    
    projectContainer.setAttribute('class', 'row project-container');

    function createHomePageHeading () {
        homePageHeading.innerHTML = '<h1 id="home-heading">Projects</h1>';
        container.appendChild(homePageHeading)
    }

    function _renderTodos (j) {
        todoCard.innerHTML = "";
        const render = (template, todoCard) => {
            todoCard.innerHTML += template;
        }

        for (let k = 0; k < projectArr.length; k++){
            if (k === j) {
                for (let i = 0; i < projectArr[k].todos.length; i++){
                    let template = `<div class="todoCard${projectArr[j].todos[i].isComplete === true ? ' todo-complete': ''}"><p class="todo-title">${projectArr[j].todos[i].title}</p><p class="todo-desc">${projectArr[j].todos[i].description}</p><p class="due-date">Due Date: ${projectArr[j].todos[i].dueDate}</p><p class="prio">Priority: ${projectArr[j].todos[i].priorityVal}</p><button class="delete-todo btn btn-outline-danger">Delete</button></div>`
                    // todoCard.setAttribute('class', 'todoCard')
                    render(template, todoCard);
                }
            }
        }

        container.appendChild(todoCard);
    }

    function _renderAddTodo () {
        todoForm.innerHTML =
            `<div id="todo-form">
                <form>
                    <div class="form-row allign-items-center">
                        <div class="col-sm-2">
                            <input type="text" name="title" placeholder="Title" id="title" class="form-control">
                        </div>
                        <div class="col">
                            <input type="text" name="description" placeholder="Description" id="description" class="form-control"><br>
                        </div>
                    </div> 
                    <div class="form-row allign-items-center">
                        <div class="col-sm-3">
                        Low        Due Date:<input type="date" name="date" id="date" class="form-control">
                        </div>
                    </div>               
                    
                    Priority:<br><input type="radio" class="priority" name="priority" value="high" checked> High<br>
                            <input type="radio" class="priority" name="priority" value="medium"> Medium<br>
                            <input type="radio" class="priority" name="priority" value="Low"> Low
                </form>
                <div>
                    <button class="btn btn-dark" type="button" id="submitBtn">
                        Submit Todo
                    </button>
                </div>
            </div>`;
            container.appendChild(todoForm);
    }

    function _renderAddProject () {
        const projectForm = document.createElement('div');
        projectForm.innerHTML =
        `<form>
            <input type="text" placeholder="Project Name" name="project-name" id="project-name" class="form-control"><br>
        </form>
        <button id="submitP" class="btn btn-outline-dark btn-sm">Submit Project</button>`;
        projectForm.setAttribute('class', 'col container-fluid')
        projectContainer.appendChild(projectForm);
    }

    const addProjectButton = () => {

        addButtonDiv.innerHTML = '<button class="add-proj-btn btn btn-outline-dark">Add a Project</button>';
        projectContainer.appendChild(addButtonDiv);
        addButtonDiv.setAttribute('class', 'col');
    }

    const goToProjects = () => {
        projectPageBtn.textContent = 'Go to projects';
        container.appendChild(projectPageBtn);
        projectPageBtn.setAttribute('id', 'project-page-button');
        projectPageBtn.setAttribute('class', 'btn btn-dark');
    }

    const displayProjectsPage = () => {
        
        let projectDiv = document.createElement('div');

        const render = (template, projectDiv) => {
            projectDiv.innerHTML += template;
        }

        projectArr.forEach(function(project) {
            let template = `<div><h2 class="project-div">${project.projectName}</h2><button class="delete-project btn btn-outline-danger btn-sm">Delete Project</button></div>`;
            render(template, projectDiv);
        });
        container.appendChild(projectContainer);
        projectContainer.appendChild(projectDiv);
        projectDiv.setAttribute('class', 'col projects-container');
    }

    const displayProject = (item) => {
        resetDom();
        const projectView = document.createElement('div');
        const projectHeading = document.createElement('h1');

        projectHeading.setAttribute('class', 'project-name-div');
        projectHeading.textContent = `${projectArr[item].projectName}`;
        container.appendChild(projectView);
        projectView.appendChild(projectHeading);
        
        for (let i = 0; i < projectArr.length; i++){
            if (i === item ){
                for (let j = 0; j < projectArr[item].todos.length; j++){
                    _renderTodos(item);
                }
            }          
            
        }
    }

    const addTodoBtn = () => {
       const addTodoBtn = document.createElement('div')
       addTodoBtn.innerHTML = `<button id="add-todo-form" class="btn btn-dark" data-toggle="button" aria-pressed="false" autocomplete="off">Add todo</button>`
       container.appendChild(addTodoBtn)
    }

    const resetDom = () => {
        container.innerHTML = '';
        projectContainer.innerHTML='';
    }


    return {
        _renderTodos,
        _renderAddTodo,
        todoCard,
        todoForm,
        displayProjectsPage,
        _renderAddProject,
        addProjectButton,
        addButtonDiv,
        resetDom,
        displayProject,
        goToProjects,
        addTodoBtn,
        createHomePageHeading,

    };
})();

export default displayFunction;
