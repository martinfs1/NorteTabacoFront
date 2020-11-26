import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../img/logoNT1.png'
import App from '../../src/App.css'

const NavBar = (props) => {

  return (
    <div className="">
      <nav className="navbar navbar-expand-sm navbar-light bg-dark text-white">
        {/* <Link className="text-white" to="/"> */}
        <img src={Logo} className="imgLogo p-0 m-0" alt="..." />
        {/* </Link> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/fa">Fuegos Artificiales</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Nosotros</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar

