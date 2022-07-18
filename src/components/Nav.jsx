import { MdTableRows } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import "./nav.css"

const Nav = () => {
  return (
    <div className="nav__container">
        <div className="nav__logo">
            <h1>Logo</h1>
        </div>
        <div className="nav__list">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="nav__icon">
            <MdTableRows />
        </div>
    </div>
  )
}

export default Nav