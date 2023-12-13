import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"

function Card({ title, id, url }) {
    const imgStyle = {
        width: '100%',
        aspectRatio: '2 / 3',
        objectFit: 'cover',
        objectPosition: 'center',
    }

    return (
        <li className="card">
            <Link to={`/title/${id}`} className="link">
                {/*<img className="card__img" alt="" src={url} />*/}
                <div className="card__header-area">
                    <LazyLoadImage style={imgStyle} src={url} className="header-area__img"/>
                </div>
                <h3 className="card__title">{title}</h3>
            </Link>
        </li>
    )
}

export default Card