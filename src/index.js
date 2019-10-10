// create an object constructor for to-dos. 
// Object should have properties: title, description, dueDate, priority, notes, checklist.
// The app should have seperate lists for todos.
// add functionality to view all projects, view all todos in a project, expand a single todo to see more details, complete a todo/project, delete a todo/project.
// use date-fns for extra functionality with dates and times.
const container = document.querySelector('#container');

import { projectArr, ProjectFactory } from './projects';
import displayFunction from './home';

let todos = [];

const todoFactory = (title, description, dueDate, priorityVal) => {
	let complete = false;
	let notes = '';
	let project = 'default';
	return { title, description, dueDate, priorityVal, complete, notes, project }
};

console.log(displayFunction.todoForm)

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
	todos.push(newTodo);
	displayFunction._renderTodos();
	console.log('todos', todos);
}

const selectButtons = () => {
	const submit = document.querySelector('#submitBtn');
	submit.addEventListener('click', addTodoFunction);
}

let newProject;
const createProject = (name, todo) => {
	newProject = ProjectFactory(name, todo);
	projectArr.push(newProject);
	return newProject;
}

createProject ('test1', 'todo1');
createProject ('test2', 'todo2');
createProject ('test3', 'todo3');



console.log(projectArr);

displayFunction.displayProject();
displayFunction._renderAddTodo();
displayFunction._renderTodos();
selectButtons();
export { todos, todoFactory }; 
 