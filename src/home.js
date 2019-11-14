import { projectArr, ProjectFactory } from './projects';

const container = document.querySelector('#container');

const displayFunction = (() => {
    const todoCard = document.createElement('div');
    const todoForm = document.createElement('form');
    const addButton = document.createElement('button');
    const projectPageBtn = document.createElement('button');

    function _renderTodos (j) {
        console.log('_renderTodos fired')
        todoCard.innerHTML = "";
        const render = (template, todoCard) => {
            todoCard.innerHTML += template;
        }

        for (let k = 0; k < projectArr.length; k++){
            if (k === j) {
                for (let i = 0; i < projectArr[k].todos.length; i++){
                    let template = `<div class="todoCard" style=${projectArr[j].todos[i].isComplete == true ? "background-color:green" : "background-color:grey"}><p class="todo-title">${projectArr[j].todos[i].title}</p><p class="todo-desc">${projectArr[j].todos[i].description}</p><p class="due-date">Due Date: ${projectArr[j].todos[i].dueDate}</p><p class="prio">Priority: ${projectArr[j].todos[i].priorityVal}</p><button class="delete-todo">Delete</button></div>`
                    render(template, todoCard);
                }
            }
        }

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
        <button id="submitP">Submit Project</button>`;
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
                console.log('i', i)
                console.log('item', item)
                console.log('i', projectArr[i].projectName)
                console.log('todos', projectArr[i].todos)
                for (let j = 0; j < projectArr[item].todos.length; j++){
                    console.log('j', j)
                    _renderTodos(item);
                }
            }          
            
        }
    }

    const addTodoBtn = () => {
       const addTodoBtn = document.createElement('div')
       addTodoBtn.innerHTML = `<button id="add-todo-form">Add todo</button>`
       container.appendChild(addTodoBtn)
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
        addTodoBtn,
    };
})();




export default displayFunction;
