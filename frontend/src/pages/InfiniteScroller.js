import CompanyItemPlaceHolder from '../components/CompanyItemPlaceHolder'
import { useState, useContext, useEffect, useRef } from 'react'
import { CompanyListPaginationContext } from '../context/PaginationContext'
import CompanyItem from '../components/CompanyItem'
const InfiniteScroller = () => {
    const [loading, setLoading] = useState(false)
    const { data, getPage, pageLoading, empty_page } = useContext(CompanyListPaginationContext)
    const loaderRef = useRef()
    const renderCompanyList = data?.map((x, i) => {
        return <CompanyItem key={x.id + i} companyData={x}/>
    })
    const RenderPlaceHolder = () => {
        const ph = []
        for (let i = 1; i <= 9 ; i++){
            ph.push(<CompanyItemPlaceHolder key={i}/>)
        }
        return ph
    }
    useEffect(() => {
        const loadNextPage = () => {
            setLoading(true)
            getPage(setLoading)
        }
        const options = {
            rootMargin: '120px'
        }
        const observer = new IntersectionObserver(entries => {
            entries.forEach(x => {
                if (x.isIntersecting){
                    loadNextPage()
                }
                if (empty_page){
                    observer.unobserve(x.target)
                }
            })
        }, options)
        observer.observe(loaderRef.current)
    }, [])
    return (
        <div className="ui container">
            <h1 style={{textAlign: 'center'}}>Company List</h1>
            <div className="" style={{display: "flex", flexWrap: 'wrap', justifyContent: "center", alignItems: 'center', rowGap: '10px', columnGap: '10px'}}>
                {pageLoading ? RenderPlaceHolder() : renderCompanyList}
            </div>
            <div className={`ui ${empty_page ? "" : "active"} centered medium inline loader`} style={{fontSize: "35px", marginTop: "15px", marginBottom: '15px', height: "50px", opacity: loading ? "1" : "0"}} ref={loaderRef}>
            </div>
            {empty_page && (<div style={{textAlign: 'center', padding: '20px'}}>
                <h2>No more data</h2>
            </div>)}
        </div>
    )
}

export default InfiniteScroller