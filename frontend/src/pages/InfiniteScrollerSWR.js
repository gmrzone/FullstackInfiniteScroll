import { useContext, useState, useRef, useEffect } from 'react'
import { InfiniteScrollerSWRContext } from '../context/InfiniteScrollerSWRContext'
const InfiniteScrollerSWR = () => {
    const { pages, nextPage } = useContext(InfiniteScrollerSWRContext)
    const [loading, setLoading] = useState(false)
    const loaderRef = useRef()

    useEffect(() => {
        const options = {
            rootMargin: '120px'
        }
        const observer = new IntersectionObserver(entries => {
            entries.forEach(x => {
                if (x.isIntersecting){
                    setLoading(true)
                    nextPage()
                }
                else{
                    setLoading(false)
                }
            })
        }, options)
        observer.observe(loaderRef.current)
    }, [])

    // }, [])
    return (
        <div className="ui container">
            <h1 style={{textAlign: 'center'}}>Company List</h1>
            <div className="" style={{display: "flex", flexWrap: 'wrap', justifyContent: "center", alignItems: 'center', rowGap: '10px', columnGap: '10px'}}>
                {pages}
            </div>
            <div className="ui active centered medium inline loader" style={{fontSize: "35px", marginTop: "15px", marginBottom: '15px', height: "50px", opacity: loading ? "1" : "0"}} ref={loaderRef}>
            </div>
        </div>
    )
}

export default InfiniteScrollerSWR