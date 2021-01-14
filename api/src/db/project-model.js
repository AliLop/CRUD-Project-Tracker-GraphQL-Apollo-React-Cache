

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

    delete(projectId) {
      const projectsArray = db.get("project").value();
      for (let i = projectsArray.length -1; i >= 0; i--) {
        if (projectsArray[i].id === projectId.id) {
          delete projectsArray[i];
          console.log('spliced', projectsArray[i]) 
          console.log("NEW ARRAY ", projectsArray);
        }
      }
      return projectId.id;
    }
  };
};

module.exports = createProjectModel;