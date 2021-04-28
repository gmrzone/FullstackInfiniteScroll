import { createContext, useState, useRef } from 'react';
// import useSWR from 'swr'
// import axios from 'axios'
// import CompanyItem from '../components/CompanyItem'
import CompanyItemSWR from '../components/CompanyItemSWR'
const InfiniteScrollerSWRContext = createContext()

const InfiniteScrollerSWRProvider = ({ children }) => {
    // const fetcher = (...args) => axios.get(...args).then(responsse => responsse.data)
    // const { data: currentPage } = useSWR("http://127.0.0.1:8000/?page=1", fetcher)
    const [count, setCount] = useState(1)
    const pages = []
    for (let i = 1; i <= count; i++){
        pages.push(<CompanyItemSWR pageIndex={i} key={i}/>)
    }
    // currentPage?.data?.forEach(element => {
    //     pages.push(<CompanyItem key={element.id} companyData={element}/>)
    // });
    
    const nextPage = () => {
        setCount(state => state + 1)
    }
    return (
        <InfiniteScrollerSWRContext.Provider value={{ pages, nextPage }}>
            {children}
        </InfiniteScrollerSWRContext.Provider>
    )
}

export { InfiniteScrollerSWRContext, InfiniteScrollerSWRProvider }