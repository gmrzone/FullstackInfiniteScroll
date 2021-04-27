const CompanyItemPlaceHolder = () => {
    return (
        <div className="ui three doubling stackable cards" style={{display: 'block', height: '354px', width: '350px', marginTop: '0px', marginRight: '10px', marginBottom: '10px'}}>
        <div className="ui card" style={{width: '100%', height: '100%'}}>
            <div className="image">
            <div className="ui placeholder">
                <div className="rectangular image"></div>
            </div>
            </div>
            <div className="content">
            <div className="ui placeholder">
                <div className="header">
                <div className="very short line"></div>
                <div className="medium line"></div>
                </div>
                <div className="paragraph">
                <div className="short line"></div>
                </div>
            </div>
            </div>
            {/* <div className="extra content">
            <div className="ui disabled primary button">Add</div>
            <div className="ui disabled button">Delete</div>
            </div> */}
        </div>
        </div>
    )
}

export default CompanyItemPlaceHolder