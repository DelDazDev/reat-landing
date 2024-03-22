import "../styles/Navbar.css"
import {NavLink} from "react-router-dom"
import imgClose from "../../public/images/icon-close.svg"
import imgHamburger from "../../public/images/icon-hamburger.svg"
import { useState } from "react"

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return(
    
    <div className="container__navbar">
      <header>
        <h4 className="navbar__logo">Loopstudio</h4>
        <img className="imgHamburger" onClick={() => setMenuOpen(!menuOpen)}  src={imgHamburger}/>
        <nav className={menuOpen ? "open" : ""}>
            <img className="imgClose" onClick={() => setMenuOpen(!menuOpen)} src={imgClose}/>
            
          <ul>
            <li>
              <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/careers">Careers</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
    
  )
}

export default Navbar;
