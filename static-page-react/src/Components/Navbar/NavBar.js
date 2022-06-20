import reactLogo from '../../React-icon.svg.png';
import './NavBar.css'

function NavBar(logo) {
    return <nav>
        <div className='logo-div'>
        <img src={reactLogo} alt="logo" width="40" />
        </div>
    </nav>
}

export default NavBar;