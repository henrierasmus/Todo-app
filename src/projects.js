const projectArr = ['default'];

const ProjectFactory = (projectName, todo) => {

    return { projectName, todo }
};

export { projectArr, ProjectFactory };