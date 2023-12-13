import '../styles/LearnMore.css'
import learnMore1 from '../img/learn-more-1.webp'
import learnMore2 from '../img/learn-more-2.webp'
import learnMore3 from '../img/learn-more-3.jpg'
import learnMore4 from '../img/learn-more-4.jpg'
import { Link } from 'react-router-dom'

function LearnMorePage() {
    return (
        <>
            <section className="section">
                <div className="section__content">
                    <h1 className="section__title">Extensive Movie Library</h1>
                    <p className="section__paragraph">Dive into an ever-expanding collection of movies spanning various genres and eras. From timeless classics to the latest blockbusters, our app offers a cinematic treasure trove that caters to every movie enthusiast.</p>
                    <div className="learn-more-link">
                        <Link className=" link-dark" to={"/explore"}>Explore</Link>
                    </div>
                </div>
                <img className="section__img" alt="" src={learnMore1} />
            </section>
            <section className="section">
                <img className="section__img" alt="" src={learnMore2} />
                <div className="section__content">
                    <h1 className="section__title">Exclusive Content and Early Access</h1>
                    <p className="section__paragraph">Enjoy access to exclusive content, behind-the-scenes footage, and sneak peeks into upcoming releases. Stay ahead of the curve and be among the first to experience the latest movies.</p>
                </div>
            </section>
            <section className="section">
                <div className="section__content">
                    <h1 className="section__title">Continuous Updates</h1>
                    <p className="section__paragraph">Stay up-to-date with the latest features, improvements, and movie additions. Our dedicated team works tirelessly to enhance your movie app experience, ensuring you get the best out of every visit.</p>
                </div>
                <img className="section__img" alt="" src={learnMore3} />
            </section>
            <section style={{ border: "none" }} className="section">
                <img className="section__img" alt="" src={learnMore4} />
                <div className="section__content">
                    <h1 className="section__title">Personalized Recommendations</h1>
                    <p className="section__paragraph">Unearth movies tailored to your unique tastes and preferences. Our smart recommendation engine analyzes your viewing history, ratings, and genre preferences to curate a personalized watchlist, ensuring you never miss a film you'll love.</p>
                </div>
            </section>
        </>
    )
}

export default LearnMorePage