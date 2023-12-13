import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { img_300 } from "../config/ImageConfiguration"
import Carousel from "./Carousel"
import Card from "./Card";
import "../styles/Carousel.css"

async function fetchData(category) {
    const url = `https://api.themoviedb.org/3/movie/${category}`
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDhkNTMyZGRhNWYxODgzMGJlZWZmOWFmYTNmNDRmOSIsInN1YiI6IjY0YmE2YWNjMDZmOTg0MDEzOGJjOWRiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5_hGCedfdBN4Xw8_ttrW-pcKFjjGoGY5o2uVWZy3uNQ'
        }
    };

    const response = await fetch(url, options);
    const result = await response.json();
    return result
}

function SectionCarousel({ category, carouselTitle, route, isActiveSeeAllLink }) {
    const { data, isLoading, isError } = useQuery({
        queryKey: [category],
        queryFn: () => fetchData(category)
    })

    const listOfItems = data?.results?.map(item => {
        const id = item.id
        const title = item.original_title
        const url = `${img_300}/${item.poster_path}`
        return (
            <Card
                key={id}
                title={title}
                id={id}
                url={url}
            />
        )
    })
    if (isLoading) {
        return <span>Is loading...</span>
    }
    if (isError) {
        return <span>Error!</span>
    }
    //isSuccess
    return (
        <section className="category">
            <h1 className="category__title">
                {carouselTitle} {isActiveSeeAllLink && <Link className="category__link" to={route}>See all &#8250;</Link>}
            </h1>
            <Carousel listOfItems={listOfItems} />
        </section>
    )
}

export default SectionCarousel