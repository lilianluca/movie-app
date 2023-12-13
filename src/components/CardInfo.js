import { useQuery } from "@tanstack/react-query"
import { img_500, img_original } from "../config/ImageConfiguration";
import SectionCarousel from "./SectionCarousel";
import { Link, useLocation } from "react-router-dom";
import useViewport from "../custom_hooks/useViewport";
import MobileCardInfo from "./MobileCardInfo";
import DesktopCardInfo from "./DesktopCardInfo";

async function fetchData(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}`
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDhkNTMyZGRhNWYxODgzMGJlZWZmOWFmYTNmNDRmOSIsInN1YiI6IjY0YmE2YWNjMDZmOTg0MDEzOGJjOWRiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5_hGCedfdBN4Xw8_ttrW-pcKFjjGoGY5o2uVWZy3uNQ'
        }
    }

    const response = await fetch(url, options)
    const result = await response.json()
    return result
}

function truncate(str) {
    const NUM_OF_WORDS = 60
    const arr = str.split(" ")
    if (arr.length > NUM_OF_WORDS) {
        return arr.slice(0, NUM_OF_WORDS).join(" ") + "..."
    } else {
        return arr.join(" ")
    }
}

function CardInfo() {
    const movieId = useLocation().pathname.split('/')[2]
    const { width } = useViewport()
    const { data, isLoading, isError } = useQuery({
        queryKey: ['title', movieId],
        queryFn: () => fetchData(movieId)
    })

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>Error!</h1>
    }

    const movieData = {
        titleId: data.id,
        title: data.original_title,
        year: data.release_date.split('-')[0],
        realeasedStatus: data.status,
        overview: truncate(data.overview),
        voteAverage: (Math.round(data.vote_average * 10) / 10).toFixed(1),
        voteCount: (Math.round((data.vote_count / 1000) * 10) / 10).toFixed(1),
        posterImg: `${img_500}/${data.poster_path}`,
        backdropImg: `${img_original}/${data.backdrop_path}`
    }
    const genreButtons = data.genres.map(genre => {
        return <Link
            key={genre.id}
            to={`/explore/${genre.name}`}
            className={width < 768 ? "link-dark mobile-genre-btn" : "btn-transparent link"}
            style={(width < 768 && width > 600) ? {
                width: `${100 / data.genres.length}%`,
                padding: "1rem 0"
            } : {}}
        >
            {genre.name}
        </Link>
    })

    const productionCountries = data.production_countries.map(country => {
        return <h6 key={country.iso_3166_1}>{country.iso_3166_1} |</h6>
    })
    return (
        <>
            {
                width < 768 ?
                    <MobileCardInfo
                        movieData={movieData}
                        productionCountries={productionCountries}
                        genreButtons={genreButtons}
                    /> :
                    <DesktopCardInfo
                        movieData={movieData}
                        productionCountries={productionCountries}
                        genreButtons={genreButtons}
                    />
            }
            <SectionCarousel
                category={`${movieData.titleId}/similar`}
                carouselTitle={`Similar to ${movieData.title}`}
                route={"/similar"}
                isActiveSeeAllLink={false}
            />
        </>
    )
}

export default CardInfo