//  import React, {useState} from 'react'
//  export default function UpdateProjectModal({onSubmit, project, onCancel}) {

  
//    const [id] = useState(project.id)
//    const [name, setName] = useState(project.name)
//    const [description, setDescription] = useState(project.description)
//    const [hours, setHours] = useState(project.hours)

//    const cancel = e => {
//      e.preventDefault()
//      console.log( 'cancel' )
//      onCancel() 
//    }  
//    const submit = e => {
//      e.preventDefault()
//      onSubmit({id, name, description, hours})
//      console.log('onsubmit', {id, name, description, hours})
//    }

//    return (
//      <div className="row center-xs">
//        <div className="col-xs-8">
//          <div className="new-project">
//        <h3 className="title">Update Project</h3>
//        <div className="box">
//          <form onSubmit={submit}>
//            <input
//              className="input"
//              type="text"
//              placeholder="Name"
//              value={name}
//              onChange={e => setName(e.target.value)}
//              required
//            />
//            <input
//              className="input"
//              type="text"
//              placeholder="Description"
//              value={description}
//              onChange={e => setDescription(e.target.value)}
//              required
//            />
//             <label className="label-hrs">Total hours</label>
//            <input
//              className="hours-input"
//              type="number"
//              id="project hours"
//              value={hours}
//              placeholder="1"
//              min="1" 
//              max="1000"
//              onChange={e => setHours(e.target.value.toString())}
//              required
//            /> 
//            <br/>
//            <button type="submit" name="submit">Update</button>
//            <a className="error button" onClick={cancel}>cancel</a>
//          </form>
//        </div>
//      </div>
//        </div>
//         <br/>
//      </div>
//    )
//  }