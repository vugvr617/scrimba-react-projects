import Logo from './airbnb_logo.png';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <img className='logo' src={Logo}></img>
        </nav>
    )
}

export default NavBar;