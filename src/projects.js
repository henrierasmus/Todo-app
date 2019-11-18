let projectArr = [
  {
    projectName:"project1",
    todos: []
  },
  {
    projectName:"project2",
    todos: []
  },
];

const ProjectFactory = (projectName) => {
    let todos =[];

    return { projectName, todos }
};



export { projectArr, ProjectFactory };
