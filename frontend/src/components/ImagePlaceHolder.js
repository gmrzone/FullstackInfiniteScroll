const ImagePlaceHolder = ({ style }) => {
    return (
        <div className="ui placeholder" style={{...style}}>
            <div className="image"></div>
        </div>
    )
}

export default ImagePlaceHolder