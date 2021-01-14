import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import logo from './Alpha-logo.png'
const Header = () =>
  <header className="header">
    <div className="row">
      <div className="col-xs">
       <Link to="/" >
          <img className='app-logo' src={logo} alt='logo' />
        </Link>
      </div>
      <div > 
      </div>
    </div>             
  </header>

export default withRouter(Header)