// create an object constructor for to-dos. 
// Object should have properties: title, description, dueDate, priority, notes, checklist.
// The app should have seperate lists for todos.
// add functionality to view all projects, view all todos in a project, expand a single todo to see more details, complete a todo/project, delete a todo/project.
// use date-fns for extra functionality with dates and times.
const container = document.querySelector('#container');
let submit;

import { projectArr, ProjectFactory } from './projects';
import displayFunction from './home';

const todoFactory = (title, description, dueDate, priorityVal) => {
	let complete = false;
	let notes = '';
	let project = 'default';
	return { title, description, dueDate, priorityVal, complete, notes, project }
};

const addTodoFunction = () => {
	const title = document.querySelector('#title').value;
	const description = document.querySelector('#description').value;
	const dueDate = document.querySelector('#date').value;
	const priorityVal = () => {
		let val;
		const priorities = document.querySelectorAll('.priority');
		for (let i = 0; i < priorities.length; i++){
			if(priorities[i].checked){
				val = priorities[i].value;
				break;
			}
		}
		return val;
	}
	const newTodo = todoFactory(title, description, dueDate, priorityVal());
	const projectPageName = document.querySelector('.project-name-div');
	// if (project.projectName === projectPageName) {
	// 	projectArr.map(newTodo);
	// 	console.log('todo array of project', project.todos);
	// // 		console.log('projectArr', projectArr);
	// }
	
	
	projectArr.forEach((project) => {
		// need to compare projectName to name on DOM to push to only 1 object
		const projectPageName = document.querySelector('.project-name-div');
		if (project.projectName === projectPageName){
			project.todos.push(newTodo);
			console.log('todo array of project', project.todos);
			console.log('projectArr', projectArr);
			displayFunction._renderTodos();
		} else {
			console.log('error');
		}			
	});	
}

const submitButtons = () => {
	document.addEventListener('click', (e) => {
		if (e.target.matches('#submitBtn')) {
			addTodoFunction();
		}
	});
}

let newProject;
let projectDiv = [...document.querySelectorAll('.project-div')];

const createProject = () => {
	const projectName = document.querySelector('#project-name').value;
	newProject = ProjectFactory(projectName);
	projectArr.push(newProject);

	projectArr.forEach((item, index) => {
		item.id = index+1;
	   });

	displayFunction.displayProjectsPage();
	
	return newProject;
}

const submitProject = () => {
	const submitP = document.querySelector('#submitP');
	submitP.addEventListener('click', () => {
		displayFunction.displayProjectsPage();
		createProject();
		projectPage();
	});	
}

const addProject = () => {
	displayFunction.displayProjectsPage();
	displayFunction.addButton.addEventListener('click', () => {
		displayFunction.resetDom();	
		displayFunction._renderAddProject();
		submitProject();
	});
}

const listenForAddProject = () => {
	document.addEventListener('click', (e) => {
		console.log(e.target);
		if (e.target.matches('.project-div')) {
			projectArr.forEach((project) => {
				if (project.projectName === e.target.textContent) {
					displayFunction.displayProject();
				}			
			});
			handleAddTodoForm();
			displayFunction.goToProjects();
			listenForProjectBtn();
		}
	});
}

const handleAddTodoForm = () => {
	const addTodoBtn = document.querySelector('#add-todo-form');
	addTodoBtn.addEventListener('click', () => {
		displayFunction._renderAddTodo();
		submitButtons();	
	});
}

const listenForProjectBtn = () => {
	const projectPageBtn = document.querySelector('#project-page-button');
	projectPageBtn.addEventListener('click', projectPage)
}


const projectPage = () => {
	displayFunction.resetDom();		
	displayFunction.addProjectButton();
	projectDiv = [...document.querySelectorAll('.project-div')];
	addProject();	
	listenForAddProject();
	console.log(projectArr)
}

// createProject ('test1', 'todo1');
// createProject ('test2', 'todo2');
// createProject ('test3', 'todo3');


// displayFunction._renderTodos();
displayFunction.goToProjects();
listenForProjectBtn();

export { todoFactory }; 
 