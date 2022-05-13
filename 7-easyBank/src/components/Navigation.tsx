import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";

export default function Navigation(){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav">
      <div className="container">
        <div className="flex">
          <img src={logo} className="logo"/>

          <i className="fa-solid fa-bars" onClick={() => setIsOpen(prevState => !prevState)}></i>
          <nav className={isOpen ? "active" : "not-active"}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Contact</Link></li>
              <li><Link to="/">Blog</Link></li>
              <li><Link to="/">Careers</Link></li>
            </ul>
          </nav>

          <button className="primary">Request Invite</button>
        </div>
      </div>
    </div>
  )
}