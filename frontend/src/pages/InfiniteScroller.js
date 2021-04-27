import CompanyItemPlaceHolder from '../components/CompanyItemPlaceHolder'
import ImagePlaceHolder from '../components/ImagePlaceHolder'
const InfiniteScroller = () => {
    return (
        <div className="ui container">
            <h1>Infinite Scroller</h1>
            <CompanyItemPlaceHolder />
            <ImagePlaceHolder style={{width: '340px', height: "191px"}}/>
        </div>
    )
}

export default InfiniteScroller