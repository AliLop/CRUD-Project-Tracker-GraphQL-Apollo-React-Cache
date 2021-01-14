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
    } ,

        deleteProject(_, { id }, { models}) {
          return models.Project.delete({ id });

    },
  }
};