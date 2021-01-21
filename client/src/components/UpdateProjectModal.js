  import React, {useState} from 'react'
  export default function UpdateProjectModal({project, onSubmit, onCancel}) {

    const [id] = useState(project.id)
    const [name, setName] = useState(project.name)
    const [description, setDescription] = useState(project.description)
    const [hours, setHours] = useState(project.hours)

    const submit = e => {
      e.preventDefault()
      onSubmit({id, name, description, hours})
    }

    return (
        <div>
       <div className="overlay"></div> 
      <div className="row center-xs">
        <div className="col-xs-8 update-project">
          <div className="popup">
            <h3 className="title">Update Project</h3>
            <div>
            <form onSubmit={submit}>
                <input
                className="input"
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                size = "10"
                required
                />
                <br/>
                <input
                className="input"
                type="text"
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
                />
                <br/>
                <label className="label-hrs">Total hours</label>
                <input
                className="hours-input"
                type="number"
                id="project hours"
                value={hours}
                placeholder="1"
                min="1" 
                max="1000"
                onChange={e => setHours(e.target.value.toString())}
                required
                /> 
                <br/>
                <button type="submit" name="submit">Update</button>
                <a className="error button" onClick={onCancel}>cancel</a>
            </form>
        </div>
      </div>
        </div>
         <br/>
      </div>
      </div>
    )
  }