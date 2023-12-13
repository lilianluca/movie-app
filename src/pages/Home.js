import Hero from "../components/Hero";
import SectionCarousel from "../components/SectionCarousel";

function Home() {
    return (
        <>
            <Hero />
            <SectionCarousel
                category={'popular'}
                carouselTitle={'Popular'}
                route={"/popular"}
                isActiveSeeAllLink={true}
            />
            <SectionCarousel
                category={'top_rated'}
                carouselTitle={'Top rated'}
                route={"/top-rated"}
                isActiveSeeAllLink={true}
            />
            <SectionCarousel
                category={'upcoming'}
                carouselTitle={'Upcoming'}
                route={"/upcoming"}
                isActiveSeeAllLink={true}
            />
            <SectionCarousel
                category={'now_playing'}
                carouselTitle={'Now playing'}
                route={"/now-playing"}
                isActiveSeeAllLink={true}
            />
        </>
    )
}

export default Home