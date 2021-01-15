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
    
    updatedProject(_, {id}, {input}, {models}) {
      const project = models.Project.update({id:id}, {...input})
      return project;
    }
  }
};