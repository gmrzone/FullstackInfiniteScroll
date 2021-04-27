import {createContext, useEffect, useState, useRef} from 'react'
import axios from 'axios'

const PaginationTwoContext = createContext()

const PaginatorTwoProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState({})
    const p = useRef(1)
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/?page=1').then(response => {
            setCurrentPage(response.data)
        })
    }, [])
    const getPage = (pageNo) => {
        console.log(pageNo)
        if (pageNo === "p"){
            pageNo = p.current - 1
        }
        else if (pageNo === "n"){
            pageNo = p.current + 1
        }
        axios.get(`http://127.0.0.1:8000/?page=${pageNo}`).then(response => {
            setCurrentPage(response.data)
            p.current = pageNo
        })
    }
    const loading = currentPage?.data ? false : true
    return (
        <PaginationTwoContext.Provider value={{ currentPage, getPage, loading }}>
            {children}
        </PaginationTwoContext.Provider>
    )
}



export { PaginationTwoContext, PaginatorTwoProvider }