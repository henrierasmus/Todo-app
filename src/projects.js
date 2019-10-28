const projectArr = [];

const ProjectFactory = (projectName) => {
    let todos =[];

    return { projectName, todos }
};



export { projectArr, ProjectFactory };