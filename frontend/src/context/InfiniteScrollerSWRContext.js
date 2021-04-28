import { createContext } from 'react';


const InfiniteScrollerSWRContext = createContext()

const InfiniteScrollerSWRProvider = ({ children }) => {
    return (
        <InfiniteScrollerSWRContext.Provider>
            {}
        </InfiniteScrollerSWRContext.Provider>
    )
}