import star from '../img/star.png'
import "../styles/DesktopCardInfo.css"

function DesktopCardInfo({ movieData, productionCountries, genreButtons }) {
    const backgroundStyles = {
        backgroundImage: `url(${movieData.backdropImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    return (
        <>
            <div className="card-info" style={backgroundStyles}>
                <div className="card-info__fade--bottom"></div>
                <div className="card-info__fade--left"></div>
                <div className="details">
                    <h1 className="details__title">{movieData.title}</h1>
                    <div className="details__info">
                        <h6>{movieData.year} |</h6> {productionCountries} <h6>{movieData.realeasedStatus}</h6>
                    </div>
                    <div className="details__genre-btns">
                        {genreButtons}
                    </div>
                    <div className="flex">
                        <div className="details__poster-card">
                            <img className="poster-card__img" alt="" src={movieData.posterImg} />
                            <div className="rating">
                                <img className="rating__star" alt="" src={star} />
                                <p className="rating__vote-average">{movieData.voteAverage}/10</p>
                            </div>
                            <p className="rating__vote-count">{movieData.voteCount}k votes</p>
                        </div>
                        <p className="details__overview">{movieData.overview}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DesktopCardInfo