import { Link } from "react-router-dom";

export default function Navigation(){
  return (
    <div className="nav">
      <div className="container">
        <img className="logo" src="../img/logo.svg" />

        <nav>
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
  )
}