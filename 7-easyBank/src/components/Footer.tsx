import { Link } from "react-router-dom";
import logo from "../img/logo-white.svg";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div className="links">
          <div className="logo-socials">
            <img src={logo} alt="easy bank logo"/>
            <div className="socials">
              <a><i className="fa-brands fa-facebook-square"></i></a>
              <a><i className="fa-brands fa-youtube"></i></a>
              <a><i className="fa-brands fa-twitter"></i></a>
              <a><i className="fa-brands fa-pinterest"></i></a>
              <a><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
          <div className="footer-nav">
            <nav className="primary-nav">
              <ul>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/">Blog</Link></li>
              </ul>
            </nav>
            <nav className="secondary-nav">
              <ul>
                <li><Link to="/">Careers</Link></li>
                <li><Link to="/">Support</Link></li>
                <li><Link to="/">Privacy Policy</Link></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="">
          <button className="primary-btn"> Request Invite</button>
          <small>&copy; Easybank. All Rights Reserved</small>
        </div>
      </div>
    </footer>
  )
}