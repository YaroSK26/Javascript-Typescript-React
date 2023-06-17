import "./Nav.css"
import logo from "../images/netflix.png";
import { GiHamburgerMenu } from "react-icons/gi";
import links from "../data2";
import { useState } from "react";
function Nav() {
const [showMenu, setShowMenu] = useState(false)

  return (
       <nav>
        <div className="navigation">
            <div className="nav-header">
                <img src={logo} alt="" />
                <button>
                    <GiHamburgerMenu onClick={() => setShowMenu(!showMenu)} className="hamburger-icon"/>
                </button>
            </div>
              <div className={`${showMenu ? "nav-list show":"nav-list hide"}`}>
                    <ul>
                        {
                            links.map((oneLink) =>{
                                const {id,text,url} = oneLink
                                 return <li key={id}>
                                    <a href={url}>{text}</a>
                                 </li>
                            })
                        }
                    </ul>
            </div>
        </div>
       </nav>
  )
}

export default Nav
