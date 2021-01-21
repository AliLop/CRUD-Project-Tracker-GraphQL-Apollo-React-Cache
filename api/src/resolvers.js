module.exports = {
  Query: {
    projects(_, { input }, { models }) {
      return models.Project.findMany(input || {});
    }
  },
  Mutation: {
    addProject(_, { input }, { models}) {
      const project = models.Project.create({ ...input });
      return project;
    },

    deleteProject(_, { id }, { models}) {
      const project =  models.Project.delete({ id: id })
      return project;
    },
    
    updateProject(_, {input}, {models}) {
      const project = models.Project.update({ ...input })
      return project;
    }
  }
};