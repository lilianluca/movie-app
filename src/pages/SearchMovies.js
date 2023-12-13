import { useState } from "react"
import "../styles/SearchMovies.css"
import Card from "../components/Card"
import { img_300 } from "../config/ImageConfiguration"

function SearchMovies() {
    const [searchedTitle, setSearchedTitle] = useState("")
    const [data, setData] = useState(null)

    function handleChange(event) {
        setSearchedTitle(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        async function fetchSearchedTitles() {
            const url = `https://api.themoviedb.org/3/search/movie?query=${searchedTitle}`
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDhkNTMyZGRhNWYxODgzMGJlZWZmOWFmYTNmNDRmOSIsInN1YiI6IjY0YmE2YWNjMDZmOTg0MDEzOGJjOWRiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5_hGCedfdBN4Xw8_ttrW-pcKFjjGoGY5o2uVWZy3uNQ'
                }
            }

            const response = await fetch(url, options)
            const result = await response.json()
            setData(result)
        }
        fetchSearchedTitles()
    }

    const cardElements = data?.results.map(item => {
        const id = item.id
        const title = item.original_title
        const url = `${img_300}/${item.poster_path}`
        return <Card
            key={id}
            title={title}
            id={id}
            url={url}
        />
    })
    return (
        <div className="search-section" style={data?.total_results ? { height: "auto" } : { height: "calc(100vh - 400px)" }}>
            <form className="center" onSubmit={handleSubmit}>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search movies..."
                    name="title"
                    onChange={handleChange}
                    value={searchedTitle}
                />
                <button className="btn-search">Search</button>
            </form>
            <div className="search-cards">
                {cardElements}
            </div>
        </div>
    )
}

export default SearchMovies