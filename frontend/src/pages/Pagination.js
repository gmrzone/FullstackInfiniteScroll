import { useContext, useState } from 'react'
import '../style/pagination.css'
import { CompanyListPaginationContext } from '../context/PaginationContext'
import CompanyItemPlaceHolder from '../components/CompanyItemPlaceHolder'
import CompanyItem from '../components/CompanyItem'
const Pagination = () => {
    const [loading, setLoading] = useState(false)
    const { data, getPage, pageLoading, empty_page } = useContext(CompanyListPaginationContext)
    const renderCompanyList = data?.map(x => {
        return <CompanyItem key={x.id} companyData={x}/>
    })
    const RenderPlaceHolder = () => {
        const ph = []
        for (let i = 1; i <= 9 ; i++){
            ph.push(<CompanyItemPlaceHolder key={i}/>)
        }
        return ph
    }
    console.log(empty_page)
    const loadNextPage = () => {
        if (!empty_page){
            setLoading(true)
            getPage(setLoading)
        }
    }
    return (
        <div className="ui container">
            <h1 style={{textAlign: 'center'}}>Company List</h1>
            <div className="" style={{display: "flex", flexWrap: 'wrap', justifyContent: "center", alignItems: 'center', rowGap: '10px', columnGap: '10px'}}>
                {pageLoading ? RenderPlaceHolder() : renderCompanyList}
            </div>
            <div className="load_button_container">
                <button className={`ui primary button ${loading && "loading"} ${empty_page && "disabled"}`} style={{width: '100%'}} onClick={loadNextPage}>
                    {empty_page ? "No More Page" : "Load More"}
                </button>
            </div>
        </div>
    )
}

export default Pagination