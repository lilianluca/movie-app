import logoImg from '../img/movie-clapper-open.png'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
import { useState } from 'react'

function Header() {
    const [active, setActive] = useState(false)
    
    function toggle() {
        setActive(prevActive => !prevActive)
    }

    return (
        <header className="header">
            <div className="logo">
                <img className="logo-img" alt="" src={logoImg} />
                <h1 className="logo-title">CineMagic</h1>
            </div>
            <a onClick={toggle} href="#" className="toggle-btn">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <nav className="nav" >
                <ul className={active ? "nav-list active" : "nav-list"}>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/explore">Explore</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/learn-more">Learn more</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/search-movies">Search movies &#128269;</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header