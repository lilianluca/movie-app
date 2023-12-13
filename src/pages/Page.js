import { useInfiniteQuery } from "@tanstack/react-query"
import { img_300 } from "../config/ImageConfiguration";
import Card from "../components/Card";

async function fetchData({ category, isGenre, pageParam = 1 }) {
    const url = isGenre ? `https://api.themoviedb.org/3/discover/movie?page=${pageParam}&with_genres=${category}` : `https://api.themoviedb.org/3/movie/${category}?page=${pageParam}`
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDhkNTMyZGRhNWYxODgzMGJlZWZmOWFmYTNmNDRmOSIsInN1YiI6IjY0YmE2YWNjMDZmOTg0MDEzOGJjOWRiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5_hGCedfdBN4Xw8_ttrW-pcKFjjGoGY5o2uVWZy3uNQ'
        }
    }
    const response = await fetch(url, options);
    const result = await response.json();
    return result
}

function Page({ category, pageTitle, isGenre }) {
    const { data, isLoading, isError, hasNextPage, fetchNextPage } = useInfiniteQuery({
        queryKey: [category],
        queryFn: ({ pageParam = 1 }) => fetchData({ category, isGenre, pageParam }),
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.next === null) {
                return false
            }
            return pages.length + 1
        }
    })

    const cardElements = data?.pages?.map(page => {
        return page.results.map(item => {
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
    })
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <h1>Error!</h1>
    }
    return (
        <div className="category">
            <h1 className="category__title">{pageTitle}</h1>
            <div className="category__card-list">
                {cardElements}
            </div>
            <div className="center">
                {hasNextPage && <button className="load-more-btn" disabled={!hasNextPage} onClick={fetchNextPage}>Load more</button>}
            </div>
        </div>
    )
}

export default Page