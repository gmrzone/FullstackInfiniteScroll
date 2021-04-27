import { createContext, useEffect, useState, useRef } from 'react'
import axios from 'axios'

const CompanyListPaginationContext = createContext()

const CompanyListPaginationProvider = ({ children }) => {
    const [data, setdata] = useState([])
    const dataRef = useRef(1)
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/?page=1').then(response => {
            setdata(response.data.data)
            dataRef.current = dataRef.current += 1
        })
    }, [])
    const getPage = (setLoading=null) => {
        
        axios.get(`http://127.0.0.1:8000/?page=${dataRef.current}`).then(response => {
            setdata(state => {
                return [...state, ...response.data.data]
            })
            if (setLoading){
                setLoading(false)
            }
            dataRef.current = dataRef.current += 1
        })
    }
    const loading = data.length === 0 ? true : false
    return (
        <CompanyListPaginationContext.Provider value={{ data, getPage, pageLoading: loading }}>
            {children}
        </CompanyListPaginationContext.Provider>
    )
}

export { CompanyListPaginationContext, CompanyListPaginationProvider }