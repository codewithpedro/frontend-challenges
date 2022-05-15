import { Link } from "react-router-dom";
import logo from "../img/logo.svg";

export default function Navigation({isOpen, handleChange} : {isOpen: boolean, handleChange: Function}){
  return (
    <div className="nav">
      <div className="container">
        <div className="flex">
          <img src={logo} className="logo"/>

          <button className="mobile-nav" onClick={() => handleChange()}><i className={isOpen? "fa-solid fa-x" : "fa-solid fa-bars"}></i></button>
          
          <nav className={isOpen ? "navbar active" : "navbar"}>
            <ul className="navbar-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Contact</Link></li>
              <li><Link to="/">Blog</Link></li>
              <li><Link to="/">Careers</Link></li>
            </ul>
          </nav>

          <button className="primary-btn">Request Invite</button>
        </div>
      </div>
    </div>
  )
}