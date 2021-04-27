import { Link, useLocation } from 'react-router-dom'
const Header = () => {
    const path = useLocation().pathname
    return (
        <div className="ui four item menu">
            <Link className={`${path === "/" && "active"} item`} to="/">Pagination</Link>
            <Link className={`${path === "/paginator" && "active"} item`} to="/paginator">Pagination Two</Link>
            <Link className={`${path === "/infinite-scroller" && "active"} item`} to="/infinite-scroller">Infinite Scroller</Link>
            <Link className={`${path === "/demo" && "active"} item`} to="/demo">InfiniteScroll (useSWR)</Link>
        </div>
    )
}

export default Header