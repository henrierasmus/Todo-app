let projectArr = [
  {
    projectName:"Default",
    todos: []
  },
];

const ProjectFactory = (projectName) => {
    let todos =[];

    return { projectName, todos }
};



export { projectArr, ProjectFactory };
