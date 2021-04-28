import { createContext, useEffect, useState, useRef } from 'react'
import axios from 'axios'

const CompanyListPaginationContext = createContext()

const CompanyListPaginationProvider = ({ children }) => {
    const [data, setdata] = useState({data: []})
    const dataRef = useRef(1)
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/?page=1').then(response => {
            setdata(response.data)
            dataRef.current = dataRef.current += 1
        })
    }, [])
    const getPage = (setLoading=null) => {
        
        axios.get(`http://127.0.0.1:8000/?page=${dataRef.current}`).then(response => {
            setdata(state => {
                const newState = {...state, current_page: response.data.current_page, last_page: response.data.last_page}
                newState.data.push(...response.data.data)
                return newState
                // return {...state, ...response.data}
            })
            if (setLoading){
                setLoading(false)
            }
            dataRef.current = dataRef.current += 1
        })
    }
    const loading = data?.data?.length === 0 ? true : false
    const empty_page = parseInt(data.current_page) === parseInt(data.last_page)
    return (
        <CompanyListPaginationContext.Provider value={{ data: data.data, getPage, pageLoading: loading, empty_page }}>
            {children}
        </CompanyListPaginationContext.Provider>
    )
}

export { CompanyListPaginationContext, CompanyListPaginationProvider }