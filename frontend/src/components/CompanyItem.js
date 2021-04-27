import LazyLoadImage from './LazyLoadImage'
const CompanyItem = ({ companyData }) => {
    return (
        <div className="ui link cards" style={{marginTop: '0px'}}>
             <div className="card" style={{width: '340px'}}>
                <div className="image">
                    {/* <img src={`http://127.0.0.1:8000${companyData.image}`} alt="Company_image"/> */}
                    <LazyLoadImage src={`http://127.0.0.1:8000${companyData.image}`} alt="Comapny_image"/>
                </div>
                <div className="content">
                <div className="header">{companyData.name}</div>
                <div className="meta">
                    <span>{companyData.email}</span>
                </div>
                <div className="description">
                    {companyData.description}
                </div>
                </div>
                <div className="extra content">
                <span className="right floated">
                    Joined in {Math.round(Math.random() * 10000)}
                </span>
                <span>
                    <i className="dollar sign icon"></i>
                    {companyData.capital}
                </span>
                </div>
            </div>
        </div>
    )
}

export default CompanyItem