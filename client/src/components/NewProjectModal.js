import React from 'react'

import NewProject from './NewProject'

export default function NewProjectModal({onSubmit}) {
  return (
    <div className="row center-xs">
      <div className="col-xs-8">
        <br/>
        <NewProject onSubmit={onSubmit} />
      </div>
       <br/>
    </div>
  )
}