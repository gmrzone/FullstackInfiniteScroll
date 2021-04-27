import { useEffect, useRef, useState } from 'react';



const LazyLoadImage = ({ src, alt, style }) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [inView, setInView] = useState(false)
    const placeholderRef = useRef()
    const imgRef = useRef()

    useEffect(() => {
        const option = {}
        const observer = new IntersectionObserver(entries => {
            entries.forEach(x => {
                if (x.isIntersecting){
                    setInView(true)
                }
            })
        }, option)
        observer.observe(placeholderRef.current)
    }, [])
    const hidePlaceholder = () => {
        placeholderRef.current.style.display = "none"
    }
    const imageVisible = () => {
        imgRef.current.style.opacity = 1;
    }
    const showImage = () => {
        imgRef.current.style.display = "block"
        setTimeout(imageVisible, 20)
    }

    const imgLoad = () => {
        setImageLoaded(true)
        placeholderRef.current.style.opacity = 0;
        setTimeout(hidePlaceholder, 200)
        setTimeout(showImage, 200)

    }
    const placeholderStyle = {
        width: style?.width || "340px",
        height: style?.height || "191px",
        opacity: 1,
        transition: '0.2s opacity ease-in-out',
        display: "block"
        // display: imageLoaded ? "none" : "block",
    }
    const imageStyle  = {
        ...style,
        opacity: 0,
        transition: '0.2s opacity ease-in-out',
        display: "none"
        // display: imageLoaded ? "block" : "none",
    }
    return (
        <>
            {inView && <img src={src} alt={alt} style={imageStyle} onLoad={imgLoad} ref={imgRef}/>}
            <div className="ui placeholder" style={{...placeholderStyle}} ref={placeholderRef}>
                <div className="image"></div>
            </div>
        </>
    )
}

export default LazyLoadImage