import { useEffect, useState } from "react";

export default function useViewport() {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        function handleWindowResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])
    // console.log(width)
    return { width }
}