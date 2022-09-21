import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className="NavBar">
            <h1 className="NavBar-h1">
                <NavLink to='/' className="NavBar-a"> Clara Joyas</NavLink>
            </h1>
            <nav>
                <ul className="NavBar-ul">
                    <li className="NavbBr-li"><NavLink to='/' className="NavBar-a">Home</NavLink></li>
                    <li className="NavBar-li"><NavLink to='/Catalogo/anillo' className="NavBar-a">Catalogo 1</NavLink></li>
                    <li className="NavBar-li"><NavLink to='/Catalogo/pulsera' className="NavBar-a">Catalogo 2</NavLink></li>
                    <li className="NavBar-li"><NavLink to='/cart' className="NavBar-a"><CartWidget /> </NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar