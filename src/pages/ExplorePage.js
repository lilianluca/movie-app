import { useQuery } from '@tanstack/react-query'
import '../styles/ExplorePage.css'
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Page from './Page';

async function fetchGenres() {
    const url = 'https://api.themoviedb.org/3/genre/movie/list';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDhkNTMyZGRhNWYxODgzMGJlZWZmOWFmYTNmNDRmOSIsInN1YiI6IjY0YmE2YWNjMDZmOTg0MDEzOGJjOWRiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5_hGCedfdBN4Xw8_ttrW-pcKFjjGoGY5o2uVWZy3uNQ'
        }
    };

    const response = await fetch(url, options)
    const result = await response.json()
    return result
}
function ExplorePage() {
    const NUM_OF_GENRES_IN_LIST = 7
    const { data, isLoading, isError } = useQuery({
        queryKey: ['genres'],
        queryFn: fetchGenres
    })
    const [activeIndex, setActiveIndex] = useState(0)
    const genreNameFromLocation = useLocation().pathname.split('/')[2]

    useEffect(() => {
        let index
        for (let i = 0; i < data?.genres.length; i++) {
            if (data.genres[i].name === genreNameFromLocation) {
                index = i
            }
        }
        setActiveIndex(index ? index : 0)
    }, [data, genreNameFromLocation])


    function toggleActiveIndex(index) {
        setActiveIndex(index)
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>Error!</h1>
    }
    const genreId = data.genres[activeIndex]?.id
    const genreName = data.genres[activeIndex]?.name
    const showedGenreBtns = data.genres.slice(0, NUM_OF_GENRES_IN_LIST).map((genre, index) => {
        const className = activeIndex === index ? "genre-item active-genre" : "genre-item"
        return <li className={className} key={genre.id}>
            <Link onClick={() => toggleActiveIndex(index)} to={`/explore/${genre.name}`} className="genre-link" >{genre.name}</Link>
        </li>
    })
    return (
        <>
            <div className="explore-page">
                <h1 className="explore-page__title">Genres</h1>
                <ul className="genres-list">
                    {showedGenreBtns}
                </ul>
            </div>
            <Page category={genreId} pageTitle={genreName} isGenre={true} />
        </>
    )
}

export default ExplorePage