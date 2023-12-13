import star from '../img/star.png'
import "../styles/MobileCardInfo.css"

function MobileCardInfo({movieData, productionCountries, genreButtons}) {
    return (
        <>
            <div className="mobile-card-info">
                <img className="mobile-card-info__img" alt="" src={movieData.backdropImg}/>
                <div className="mobile-details">
                    <h1 className="mobile-details__title">{movieData.title}</h1>
                    <div className="mobile-details__info">
                        <h6>{movieData.year} |</h6> {productionCountries} <h6>{movieData.realeasedStatus}</h6>
                    </div>
                    <div className="mobile-details__genre-btns">
                        {genreButtons}
                    </div>
                    <div className="mobile-details__content">
                        <div className="mobile-details__poster-card">
                            <img className="mobile-poster-card__img" alt="" src={movieData.posterImg} />
                            <div className="mobile-rating">
                                <img className="mobile-rating__star" alt="" src={star} />
                                <p className="mobile-rating__vote-average">{movieData.voteAverage}/10</p>
                            </div>
                            <p className="mobile-rating__vote-count">{movieData.voteCount}k votes</p>
                        </div>
                        <p className="mobile-details__overview">{movieData.overview}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileCardInfo