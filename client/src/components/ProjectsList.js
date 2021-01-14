import React, {useState} from 'react'
import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/react-hooks'

const DELETE_PROJECT = gql`
    mutation DeleteteProject($id: ID!) {
      deleteProject(id: $id) {
        id
      }
    }
  `; 

export default function ProjectsList({projects}) {
  
  const [deleteProject] = useMutation(DELETE_PROJECT, {
      //   update(cache, { data: { deleteProject } }) {
      // const data = cache.readQuery({ query: GET_PROJECTS });
      //  console.log("DELETE BTN PRESSED")
      // cache.writeQuery({
      //   query: GET_PROJECTS,
      //   data: { projects: [ ...data.projects].filter(item => item.Id=== deleteProject.id)},
      // });
    // },
  }  )

   const removeProject = id => {
     console.log('myid', id)
     deleteProject({
       variables: { id: id }
       
     });
     console.log('myobjectid', {id})
   }

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

