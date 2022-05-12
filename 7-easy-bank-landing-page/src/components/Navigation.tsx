import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
        <li><a>Blog</a></li>
        <li><a>Careers</a></li>
      </ul>
    </nav>
  )
}