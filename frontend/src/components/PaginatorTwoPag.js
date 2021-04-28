const PaginatorTwoPag = ({ currentPage, LastPage, changePage }) => {
    currentPage = parseInt(currentPage)
    const renderPagBlock = () => {
        const blocks = []
        for (let i = currentPage; i <= (currentPage + 3) && i <= parseInt(LastPage); i++){
            blocks.push(
                <span className={`${currentPage === i && "active"} item afzal`} key={i} onClick={() => changePage(i)}>
                    {i}
                </span>
            )
        }
        return blocks
    }
    const nextPage = () => {
        if (currentPage !== LastPage){
            changePage('n')
        }
    }
    const previousPage = () => {
        if (currentPage !== 1){
            changePage("p")
        }
    }
    return (
        <div className="ui pagination menu">
            <span className={`${currentPage === 1 && "disabled item"} item afzal`} onClick={() => previousPage()}>
                Previous
            </span>
            {renderPagBlock()}
            <span className={`${currentPage === LastPage && "disabled item"} item afzal`} onClick={() => nextPage()}>
                Next
            </span>
        </div>
    )
}

export default PaginatorTwoPag