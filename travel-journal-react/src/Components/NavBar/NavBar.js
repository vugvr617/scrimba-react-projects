import './NavBar.css';
import worldIcon from './world-icon.svg';

const NavBar = () => {
    return (<nav>
        <div className="nav-div"><img src={worldIcon} alt="World Icon"></img><p className="nav-text">my travel journal.</p></div>
    </nav>)
}

export default NavBar;

