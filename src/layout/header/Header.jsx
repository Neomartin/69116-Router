import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {

    const userRole = "CLIENT";

  return (
    <header className="main-header">
        <ul className="nav-list">
            <li className="nav-item">

                <NavLink to="/" className="nav-link" >Principal</NavLink>
                
            </li>
            <li className="nav-item">
                <NavLink to="/contact" className="nav-link">Contacto</NavLink>
            </li>

            {
                userRole === "ADMIN" &&  
                <li className="nav-item">
                    <NavLink to='/admin-product' className="nav-link">
                        Admin Product
                    </NavLink>
                </li>
            }
           
            <li className="nav-item">
                <a href="#" className="nav-link">Link</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">Link</a>
            </li>
        </ul>
    </header>
  )
}
