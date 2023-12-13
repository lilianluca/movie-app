import "../styles/Footer.css"
import facebookIcon from "../img/social_icons/facebook.png"
import instagramIcon from "../img/social_icons/instagram.png"
import twitterIcon from "../img/social_icons/twitter.png"
import linkedinIcon from "../img/social_icons/linkedin.png"
import youtubeIcon from "../img/social_icons/youtube.png"
import warnerbros from "../img/companies/warnerbros.png"
import paramountPictures from "../img/companies/paramount-pictures.png"
import dreamworks from "../img/companies/dreamworks.png"
import columbiaPictures from "../img/companies/columbia-pictures.png"
import waltDisneyPictures from "../img/companies/walt-disney-pictures.png"

function Footer() {
    return (
        <footer className="footer">
            <div className="social-icons">
                <a className="social-link" href="https://www.facebook.com"><img className="social-icon" alt="" src={facebookIcon} /></a>
                <a className="social-link" href="https://www.instagram.com"><img className="social-icon" alt="" src={instagramIcon} /></a>
                <a className="social-link" href="https://twitter.com"><img className="social-icon" alt="" src={twitterIcon} /></a>
                <a className="social-link" href="https://www.linkedin.com"><img className="social-icon" alt="" src={linkedinIcon} /></a>
                <a className="social-link" href="https://www.youtube.com/"><img className="social-icon" alt="" src={youtubeIcon} /></a>
            </div>
            <div className="companies">
                <img className="company-img" alt="" src={warnerbros} />
                <img className="company-img" alt="" src={columbiaPictures} />
                <img className="company-img" alt="" src={dreamworks} />
                <img className="company-img" alt="" src={paramountPictures} />
                <img className="company-img" alt="" src={waltDisneyPictures} />
            </div>
            <div className="copyright">&copy; 2023 by Lilian Luca</div>
        </footer>
    )
}

export default Footer