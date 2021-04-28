import LazyLoadImage from './LazyLoadImage'
import useSWR from 'swr'
import axios from 'axios'
import CompanyItemPlaceHolder from '../components/CompanyItemPlaceHolder'
const CompanyItem = ({ pageIndex }) => {
    const { data } = useSWR(`http://127.0.0.1:8000/?page=${pageIndex}`, (...args) => axios.get(...args).then(response => response.data))
    const RenderPlaceHolder = () => {
        const ph = []
        for (let i = 1; i <= 9 ; i++){
            ph.push(<CompanyItemPlaceHolder key={i}/>)
        }
        return ph
    }
    return data?.data?.map(data => (
        <div className="ui link cards" style={{marginTop: '0px'}} key={data.id}>
        <div className="card" style={{width: '340px'}}>
            <div className="image">
                {/* <img src={`http://127.0.0.1:8000${companyData.image}`} alt="Company_image"/> */}
                <LazyLoadImage src={`http://127.0.0.1:8000${data?.image}`} alt="Comapny_image"/>
            </div>
            <div className="content">
            <div className="header">{data?.name}</div>
            <div className="meta">
                <span>{data?.email}</span>
            </div>
            <div className="description">
                {data?.description}
            </div>
            </div>
            <div className="extra content">
            <span className="right floated">
                Joined in {Math.round(Math.random() * 10000)}
            </span>
            <span>
                <i className="dollar sign icon"></i>
                {data?.capital}
            </span>
            </div>
        </div>
    </div>
    )) || RenderPlaceHolder()

    
}

export default CompanyItem