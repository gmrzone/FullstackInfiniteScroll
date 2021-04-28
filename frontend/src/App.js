import './App.css';
import Header from './components/Header'
import {Switch, Route} from  'react-router-dom'
import Pagination from './pages/Pagination'
import InfiniteScroller from './pages/InfiniteScroller'
import PaginationTwo from './pages/PaginationTwo'
import InfiniteScrollerSWR from './pages/InfiniteScrollerSWR';
import { CompanyListPaginationProvider } from './context/PaginationContext'
import { PaginatorTwoProvider } from './context/PaginationTwoContext'
import { InfiniteScrollerSWRProvider } from './context/InfiniteScrollerSWRContext'
function App() {
  return (
    <>
    <Header />
    <Switch>
        <Route path="/" exact >
          <CompanyListPaginationProvider>
            <Pagination />
          </CompanyListPaginationProvider>
        </Route>
        <Route path="/paginator" exact >
          <PaginatorTwoProvider>
              <PaginationTwo />
          </PaginatorTwoProvider>
        </Route>
        <Route path="/infinite-scroller" exact >
          <CompanyListPaginationProvider>
            <InfiniteScroller />
          </CompanyListPaginationProvider>
        </Route>
        <Route path="/swr"  exact>
            <InfiniteScrollerSWRProvider>
                <InfiniteScrollerSWR />
            </InfiniteScrollerSWRProvider>
        </Route>
        {/* <Route component={InfiniteScroller} path="/infinite-scroller" exact /> */}
        {/* <Route component={InfiniteScrollerSWR} path="/swr" exact /> */}
    </Switch>
    </>
  );
}

export default App;
