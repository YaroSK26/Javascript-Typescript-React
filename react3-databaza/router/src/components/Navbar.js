import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='nav'>
        <NavLink to="/" className={({isActive}) =>isActive? "activeLink link": "nonActiveLink link"}>Domov</NavLink>
      <NavLink to="/movies" className={({ isActive }) => isActive ? "activeLink link" : "nonActiveLink link"} >Filmy</NavLink>
      <NavLink to="/serials" className={({ isActive }) => isActive ? "activeLink link" : "nonActiveLink link"}>Serialy</NavLink>
    </nav>
  )
}

export default Navbar