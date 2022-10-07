import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return(
        <nav className="header">
            <FontAwesomeIcon icon={faEarthAmericas} className="header--icon" />
            <p className='header--title'>my travel journal.</p>
        </nav>
    )
}

export default Header