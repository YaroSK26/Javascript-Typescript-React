import "./NavBar.css"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
        <nav>
            <NavLink to="/">Domov</NavLink>
            <NavLink to="all-movies">Filmy</NavLink>
            <NavLink to="form">Form</NavLink>
        </nav>
    </header>
  )
}

export default NavBar