// event listeners are looped when i click on a project

const container = document.querySelector('#container');
let newProject;
let projectNameForm = document.querySelector('#project-name');
let projectPageName = document.querySelector('.project-name-div');


import { projectArr, ProjectFactory } from './projects';
import displayFunction from './home';

const todoFactory = (title, description, dueDate, priorityVal) => {
	let isComplete = false;
	let notes = '';
	let project = 'default';
	return { title, description, dueDate, priorityVal, isComplete, notes, project }
};

const createProject = () => {
	const projectNameForm = document.querySelector('#project-name').value;
	newProject = ProjectFactory(projectNameForm);
	projectArr.push(newProject);

	return newProject;
}

const addTodoFunction = (e) => {
	const title = document.querySelector('#title').value;
	const description = document.querySelector('#description').value;
	const dueDate = document.querySelector('#date').value;
	projectPageName = document.querySelector('.project-name-div');

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
	for(let i = 0; i < projectArr.length; i++){
		if (projectArr[i].projectName === projectPageName.textContent){
			projectArr[i].todos.push(newTodo);
			displayFunction.resetDom()
			displayFunction.displayProject(i);
			

			console.log(projectArr);
		}
	}
}

const handleAddTodoForm = () => {
	const addTodoBtn = document.querySelector('#add-todo-form');
	addTodoBtn.addEventListener('click', () => {
		displayFunction._renderAddTodo();
		submitButtons();	
	});
}

const submitButtons = () => {
	document.addEventListener('click', (e) => {
		if (e.target.matches('#submitBtn')) {
			console.log('clicked!!')
			addTodoFunction();	
			createProjectPage();							
		}
	});
}

const listenForProject = () => {
	document.addEventListener('click', (e) => {
		if (e.target.matches('.project-div')) {
			displayFunction.resetDom();
			for (let i = 0; i < projectArr.length; i++) {
				if(projectArr[i].projectName === e.target.textContent){
					displayFunction.resetDom();
					displayFunction.displayProject(i);
					createProjectPage();
				}
			}
		}
	});
}

const displayPrject = () => {
	for (let i = 0; i < projectArr.length; i++){
		projectNameForm = document.querySelector('#project-name')			
		console.log('test', projectArr[i].projectName)
		if (projectArr[i].projectName === projectNameForm.value) {
			console.log('this should work')
			displayFunction.resetDom();
			displayFunction.displayProject(i);
			createProjectPage();
		}
	}
}

const createHomePage = () => {
	displayFunction.resetDom();
	// Display all projects
	displayFunction.displayProjectsPage();	
	// Display add project button
	displayFunction.addProjectButton();
	// Projects must be clickable (even listener)
	displayFunction.addButton.addEventListener('click', () => {		
		createAddProjPage();
	});
	listenForProject();
}

const createProjectPage = () => {
	// Display Project page		
	// Button to add todo
	displayFunction.addTodoBtn();
	// Display add Todo form(make this a button later) -> push todo to project array
	handleAddTodoForm();
	// Button to go to the home page(event listener)
	displayFunction.goToProjects();
	const projectPageBtn = document.querySelector('#project-page-button');
	projectPageBtn.addEventListener('click', createHomePage)
	// Button to delete specific Todos(event litener)(splice?)
	deleteTodo();
	// Button to complete a todo(even listener) 
	// Delete entire project

	completeTodo();
}

const createAddProjPage = () => {
	displayFunction.resetDom();
	// display add project form
	// Display add project button (event listener)
	displayFunction._renderAddProject();
	const submitP = document.querySelector('#submitP');
	
	submitP.addEventListener('click', () => {
		// in event listener:
		// create a project and push it into projectArr
		createProject();
		// Display the project
		displayPrject();		
	}); 
}

createHomePage()

const deleteTodo = () => {
	const deleteTodoBtns = [...document.querySelectorAll('.delete-todo')];
	const projectPageName = document.querySelector('.project-name-div');
	console.log('project Arr', projectArr)

	deleteTodoBtns.forEach(deleteTodoBtn => {
		deleteTodoBtn.addEventListener('click', (e) => {
			// console.log(e)
			// console.log('parent node first child', e.target.parentNode.firstChild.textContent)
			for(let i = 0; i < projectArr.length; i++){
				if (projectArr[i].projectName === projectPageName.textContent) {
					for(let j = 0; j < projectArr[i].todos.length; j++){
						if(projectArr[i].todos[j].title == e.target.parentNode.firstChild.textContent){
							projectArr[i].todos.splice(j, 1);
							displayFunction.resetDom();
							displayFunction.displayProject(i);
							createProjectPage();
						}										
					}				
				}
			}
		})
	});	
}

const completeTodo = () => {
	const todoCards = [ ...document.querySelectorAll('.todoCard') ];
	const projectPageName = document.querySelector('.project-name-div');

	todoCards.forEach(todoCard => {
		todoCard.addEventListener('click', (e) => {
			for(let i = 0; i < projectArr.length; i++){
				if (projectArr[i].projectName === projectPageName.textContent) {
					for(let j = 0; j < projectArr[i].todos.length; j++){
						if(projectArr[i].todos[j].title == e.target.parentNode.firstChild.textContent){
							projectArr[i].todos[j].isComplete = !projectArr[i].todos[j].isComplete;
							console.log('this todo is complete', projectArr[i].todos[j].isComplete)
							displayFunction.resetDom();
							displayFunction.displayProject(i);
							createProjectPage();
						}										
					}				
				}
			}
		})
	});	
}

export { todoFactory };
