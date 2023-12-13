import { useState } from 'react'
import leftArrow from '../img/previous.png'
import rightArrow from '../img/next.png'
import '../styles/Carousel.css'
import useViewport from '../custom_hooks/useViewport'

function Carousel({ listOfItems }) {
    const [translateX, setTraslateX] = useState(0)
    const { width } = useViewport()
    function getItemsPerSlide() {
        let itemsPerSlide = 6
        if (width < 1200 && width > 992) {
            itemsPerSlide = 5
        } else if (width <= 992 && width > 768) {
            itemsPerSlide = 4
        } else if (width <= 768 && width > 550) {
            itemsPerSlide = 3
        } else if (width <= 550 && width > 450) {
            itemsPerSlide = 2
        } else if (width <= 450) {
            itemsPerSlide = 1
        }
        return itemsPerSlide
    }
    const divisible = listOfItems?.length % getItemsPerSlide() === 0
    const numberOfSlides = divisible ? (Math.floor(listOfItems?.length / getItemsPerSlide()) - 1) : Math.floor(listOfItems?.length / getItemsPerSlide())
    const getSlide = {
        transform: `translateX(${translateX}%)`
    }

    function handleNext() {
        setTraslateX(prevTraslateX => {
            if (numberOfSlides * -100 >= prevTraslateX) {
                return 0
            } else {
                return prevTraslateX -= 100
            }
        })
    }

    function handlePrevious() {
        setTraslateX(prevTraslateX => {
            if (prevTraslateX === 0) {
                return numberOfSlides * -100
            } else {
                return prevTraslateX += 100
            }
        })
    }
    return (
        <div className="carousel">
            <button onClick={handlePrevious} className="handle-direction handle-direction--left">
                <img className="handle-direction__img" alt="" src={leftArrow} />
            </button>
            <ul style={getSlide}>
                {listOfItems}
            </ul>
            <button onClick={handleNext} className="handle-direction handle-direction--right">
                <img className="handle-direction__img" alt="" src={rightArrow} />
            </button>
        </div>
    )
}

export default Carousel