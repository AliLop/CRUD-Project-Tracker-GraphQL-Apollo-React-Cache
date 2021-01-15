import React, {useState} from 'react'

export default function NewProject({onSubmit}) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [hours, setHours] = useState('')

  const submit = e => {
    e.preventDefault()
    onSubmit({name, description, hours})
  }

  return (
    <div className="new-project" id="formModal">
      <h3 className="title">Create Project</h3>
      <div className="box">
        <form onSubmit={submit}>

          <input
            className="input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />

          <input
            className="input"
            type="text"
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />

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

          <button type="submit" name="submit">Create</button>
        </form>
      </div>
    </div>
  )
}