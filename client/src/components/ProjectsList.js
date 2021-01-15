import React, {useState} from 'react'
import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/react-hooks'
import Loader from './Loader'
// import UpdateProjectModal from './UpdateProjectModal'
// import ReactDOM from 'react-dom';

const DELETE_PROJECT = gql`
    mutation deleteProject($id: ID!) {
      deleteProject(id: $id) {
        id
      }
    }
  `; 

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

// const UPDATE_PROJECT = gql`
//   mutation updatedProject($id: ID!, $updatedProject: ProjectsInput!) {
//     updatedProject(id: $id, input: $updatedProject) {
//       id
//       name
//       description
//       hours
//     }
//   }
// `;

export default function ProjectsList({projects}) {
  const [modal, setModal] = useState(false)
  
  const { loading, error} = useQuery(GET_PROJECTS );

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    update(cache, { data: { deleteProject } }) {
      const data = cache.readQuery({ query: GET_PROJECTS });
        //console.log("DELETE BTN PRESSED")
      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: [ ...data.projects].filter(item => item.id !== deleteProject.id)},
      });
    },
  })

   const removeProject = id => {
     console.log('myid', id)
     deleteProject({
       variables: { id: id }
       
     });
     console.log('myobjectid', {id})
   }

  //  const [updateProject, updatedProject] = useMutation(UPDATE_PROJECT, {
  //    update(cache, { data: { updatedProject } }) {
  //     const data = cache.readQuery({ query: GET_PROJECTS });
  //     cache.writeQuery({
  //       query: GET_PROJECTS,
  //       data: { projects: [updatedProject, ...data.projects] },
  //     });
  //   },
  // });

     if (loading || deleteProject.loading) {
     return <Loader />;
    }
    
    if (error || deleteProject.error) {
      return <p>An error occured</p>;
    }

  //  const onSubmit = input => {
  //    setModal(false)
  //    console.log( 'updateProject', input)
  //    updateProject({
  //     variables: { 
  //       updatedProject: input }
  //   });
  //  }
  
    //  const toUpdateProject = project => {
    //    console.log( 'toUpdateProject')
    //    let div = document.getElementById('formModal');
    //    ReactDOM.render(
    //      <UpdateProjectModal project={project} onSubmit={onSubmit} onCancel={() => setModal(false)} container={div}/>,
    //    document.body.appendChild(div)
    //  );
    
    //  }

  return (
      <table className=" row table table-borderless col-sm-12">
        <thead id="table-head">
          <tr>
            <th id="th" scope="col">Name</th>
            <th id="th" scope="col">Description</th>          
          </tr>
        </thead>
        <tbody className="tbody">
        {projects.map(project => (
          <tr key={project.id}>
            <td id="td-name">{project.name}</td>
            <td id="td-desc">{project.description}</td>
            <td id="td-hours">{project.hours} H</td>
            <td id="project-handle"><button className="error" onClick={() => removeProject(project.id)}><i className="far fa-trash-alt"></i> </button></td>
            {/* <td id="project-handle"><button className="error" onClick={() => {toUpdateProject(project); setModal(true)}}>Update</button></td> */}
          </tr>
          ))}
          </tbody>
      </table>     
  )
  }

ProjectsList.defaultProps = {
  projects: []
}

// const [id, setId] = useState('')

