const nanoid = require("nanoid");

const createProjectModel = (db) => {
  return {
    findMany(filter) {
      return db
        .get("project")
        .filter(filter)
        .orderBy(["createdAt"], ["desc"])
        .value();
    },

    create(project) {
      const newProject = { id: nanoid(), createdAt: Date.now(), ...project };
      db.get("project").push(newProject).write();
      return newProject;
    },

    delete(id) {
      const projectsArray = db.get("project").value();
      for (let i = projectsArray.length -1; i >= 0; i--) {
        if (projectsArray[i].id === id.id) {
          const deletedProject = projectsArray[i]
          projectsArray.splice([i], 1);
          return deletedProject;
        }
      }
      return deletedProject;
    },

    update(project){
      const projectsArray = db.get("project").value();

      for ( let i = projectsArray.length -1; i >= 0; i--){
        if (projectsArray[i].id === project.id) {
          projectsArray[i].name = project.name
          projectsArray[i].description = project.description
          projectsArray[i].hours = project.hours
          return projectsArray[i];
        }
      }
    }
  };
};

module.exports = createProjectModel;