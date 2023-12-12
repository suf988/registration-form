import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div>
            <nav className="nav-div">
                <div className="main-div">
                    <a href="#" className="title-tag">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-10" alt="CodeBook Logo" />
                        <span className="title-span">CodeBook</span>
                    </a>
                
                </div>
            </nav>
        </div>
    )
}

export default Navbar
