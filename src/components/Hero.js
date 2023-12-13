import { Link } from 'react-router-dom'
import '../styles/Hero.css'

function Hero() {
    return (
        <div className="hero">
            <div className="hero__container">
                <h1 className="hero__title">"CineMagic: Explore the World of Movies"</h1>
                <p className="hero__text">Welcome to CineMagic, the realm of movie enthusiasts! With an ever-growing collection of films, CineMagic is the perfect platform to explore your passion for cinema. Delve into thought-provoking documentaries, heartwarming dramas, and adrenaline-pumping thrillers. Let your movie muse guide you to new horizons.</p>
                <div className="link-div" style={{marginTop: "2rem"}}>
                    <Link className="link btn-transparent hero__link" to={"/explore"}>Explore</Link>
                </div>
                
            </div>
        </div>
    )
}

export default Hero