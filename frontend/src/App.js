import './App.css';
import Header from './components/Header'
import {Switch, Route} from  'react-router-dom'
import Pagination from './pages/Pagination'
import InfiniteScroller from './pages/InfiniteScroller'
import PaginationTwo from './pages/PaginationTwo'
import Demo from './pages/Demo';
import { CompanyListPaginationProvider } from './context/PaginationContext'
import { PaginatorTwoProvider } from './context/PaginationTwoContext'
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
        <Route component={InfiniteScroller} path="/infinite-scroller" exact />
        <Route component={Demo} path="/demo" exact />
    </Switch>
    </>
  );
}

export default App;
