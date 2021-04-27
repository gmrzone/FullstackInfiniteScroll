import CompanyItem from '../components/CompanyItem'
import { useContext } from 'react'
import '../style/pagination.css'
import { PaginationTwoContext } from '../context/PaginationTwoContext'
import PaginatorTwoPag from '../components/PaginatorTwoPag'
import CompanyItemPlaceHolder from '../components/CompanyItemPlaceHolder'
const PaginationTwo = () => {
    const {currentPage: {data, current_page, last_page}, getPage, loading} = useContext(PaginationTwoContext)
    const renderCompanyList = data?.map(x => {
        return <CompanyItem key={x.id} companyData={x}/>
    })
    const RenderPlaceHolder = () => {
        const ph = []
        for (let i = 1; i <= 9 ; i++){
            ph.push(<CompanyItemPlaceHolder />)
        }
        return ph
    }
    const changePage = (pageno) => {
        window.scrollTo(0, 0);
        getPage(pageno)
    }
    return (
        <div className="ui container">
        <h1 style={{textAlign: 'center'}}>{`Page ${current_page} of ${last_page}`}</h1>
        <div className="" style={{display: "flex", flexWrap: 'wrap', justifyContent: "center", alignItems: 'center', rowGap: '10px', columnGap: '10px'}}>
            {loading ? RenderPlaceHolder() : renderCompanyList}
        </div>
        <div className="load_button_container" style={{textAlign: "center"}}>
            <PaginatorTwoPag currentPage={current_page} LastPage={last_page} changePage={changePage}/>
        </div>
    </div>
    )
}

export default PaginationTwo