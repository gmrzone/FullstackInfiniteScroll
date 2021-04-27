import { createContext } from 'react';


const InfiniteScrollerContext = createContext()

const InfiniteScrollerProvider = ({ children }) => {
    return (
        <InfiniteScrollerContext.Provider>
            {}
        </InfiniteScrollerContext.Provider>
    )
}