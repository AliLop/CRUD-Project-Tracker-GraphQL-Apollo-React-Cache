import React from 'react'
import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/react-hooks'
import ProjectsList from '../components/ProjectsList'
import NewProjectModal from '../components/NewProjectModal'
import Loader from '../components/Loader'

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
      description
      hours
    }
  }
`;

const NEW_PROJECT = gql`
  mutation CreateAProject($newProject: NewProjectInput!) {
    addProject(input: $newProject) {
      id
      name
      description
      hours
    }
  }
`;

export default function Projects () {
  const { loading, error, data } = useQuery(GET_PROJECTS );
  
  const [createProject, newProject] = useMutation(NEW_PROJECT, {
     update(cache, { data: { addProject } }) {
      const data = cache.readQuery({ query: GET_PROJECTS });
      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: [addProject, ...data.projects] },
      });
    },
  });

  const onSubmit = input => {
    createProject({
      variables: { newProject: input }
    });
  }
  
   if (loading || newProject.loading) {
     return <Loader />;
  }
   
  if (error || newProject.error) {
    return <p>An error occured</p>;
  }
  
  return (
    <div className="page projects-page">
      <section>
        <div className="row betwee-xs middle-xs">
          <div className="col-xs-6">
            <h3 className="title">Projects list</h3>
          </div>
        </div>
      </section>
      <section className="main-page">
      <div>
        <ProjectsList projects={data.projects} />
        </div>
        <div>
        <NewProjectModal onSubmit={onSubmit} />
        </div>
      </section>
    </div>
  )
}


