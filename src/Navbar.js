import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbarContainer">
                    <div className="logo">
                        <Link to='/' className='navbar-logo'>
                        TRVL
                        <i class='fab fa-typo3' />
                    </Link></div>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">
                                Home
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>

        </>
    );
}

export default Navbar;