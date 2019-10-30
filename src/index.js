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
	projectArr.forEach((project) => {
		console.log('projectName', project.projectName);
		console.log('projecPageName', projectPageName.textContent)
		if(projectPageName === project.projectName.textContent) {
			project.todos.push(newTodo);
		}
		// need to compare projectName to name on DOM to push to only 1 object
		// console.log('todo array of project', project.todos);
		// console.log('projectArr', projectArr);
		displayFunction._renderTodos();			
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
	
	return newProject;
}

const submitProject = () => {
	const submitP = document.querySelector('#submitP');
	submitP.addEventListener('click', () => {
		createProject();
		displayFunction.resetDom();
		addProject();
		displayFunction.addProjectButton();
		// projectPage();
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
		console.log(e);
		console.log('---project arr', projectArr);
		if (e.target.matches('.project-div')) {
			displayFunction.resetDom();
			for (let i = 0; i < projectArr.length; i++) {
				if(projectArr[i].projectName === e.target.textContent){
					displayFunction.displayProject();
				}
			}
			// projectArr.forEach((project) => {
			// 	if (project.projectName === e.target.textContent) {
			// 		displayFunction.displayProject();
			// 	}			
			// });
			handleAddTodoForm();
			displayFunction.goToProjects();
			listenForProjectBtn();
		}
	});
}

// const listenForAddProject = () => {
// 	document.addEventListener('click', (e) => {
// 		console.log(e);
// 		console.log('project arr', projectArr);
// 		if(e.target.matches('.project-div'))
// 		projectArr.forEach((project) => {
// 			if (e.target.textContent === project.name) {
// 				console.log('project test', project);
// 				console.log(projectArr)
// 			}
// 		});
// 		 {
// 			console.log(projectArr)
// 			projectArr.forEach((project) => {
				
// 				if (project.projectName === e.target.textContent) {
// 					displayFunction.displayProject();
// 				}			
// 			});
// 			handleAddTodoForm();
// 			displayFunction.goToProjects();
// 			listenForProjectBtn();
// 		}
// 	});
// }

const handleAddTodoForm = () => {
	const addTodoBtn = document.querySelector('#add-todo-form');
	addTodoBtn.addEventListener('click', () => {
		displayFunction._renderAddTodo();
		submitButtons();	
	});
}

// this function needs to take me to the page displaying different projects and add the listener
// to the add project button
const listenForProjectBtn = () => {
	const projectPageBtn = document.querySelector('#project-page-button');
	projectPageBtn.addEventListener('click', () => {
		displayFunction.resetDom();
		displayFunction.addProjectButton();
		addProject();
	});
}


// const projectPage = () => {
// 	displayFunction.resetDom();		
// 	displayFunction.addProjectButton();
// 	projectDiv = [...document.querySelectorAll('.project-div')];
// 	addProject();	
// 	listenForAddProject();
// 	console.log(projectArr)
// }

// createProject ('test1', 'todo1');
// createProject ('test2', 'todo2');
// createProject ('test3', 'todo3');


// displayFunction._renderTodos();
// displayFunction.goToProjects();
// listenForProjectBtn();
addProject();
displayFunction.addProjectButton();
listenForAddProject();

export { todoFactory }; 