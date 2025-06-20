import { Link } from 'react-router'

const Nav =()=> {

    return (
        <nav>
            <ul className="nav-list nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">All Books</Link>
                </li>
                <li className="nav-item">
                    <Link to="/author" className="nav-link">Authors</Link>
                </li>
                <li className="nav-item">
                    <Link to="/publisher"className="nav-link">Publishers</Link>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Genres</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Formats</a>
                </li>
                <li className="nav-item dropdown">
            <button
            className="nav-link dropdown-toggle btn btn-link"
            id="genreDropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >
            GENRES
            </button>
            <ul className="dropdown-menu text-uppercase" aria-labelledby="genreDropdown">
            <li><Link to="/genre/1" className="dropdown-item">some</Link></li>
            <li><Link to="/genre/2" className="dropdown-item">some</Link></li>
            <li><Link to="/genre/3" className="dropdown-item">some</Link></li>
            <li><Link to="/genre/4" className="dropdown-item">some</Link></li>
            <li><Link to="/genre/5" className="dropdown-item">some</Link></li>
            <li><Link to="/genre/6" className="dropdown-item">some</Link></li>
            <li><Link to="/genre/7" className="dropdown-item">some</Link></li>
            <li><Link to="/genre/8" className="dropdown-item">some</Link></li>
            <li><Link to="/genre/9" className="dropdown-item">some</Link></li>
            <li><Link to="/genre/10" className="dropdown-item">some</Link></li>
            </ul>
            </li>
            <li className="nav-item dropdown">
            <button
            className="nav-link dropdown-toggle btn btn-link"
            id="formatDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >
            FORMATS
            </button>
            <ul className="dropdown-menu text-uppercase" aria-labelledby="formatDropdown">
            <li><Link to="/format/1" className="dropdown-item">some</Link></li>
            <li><Link to="/format/2" className="dropdown-item">some</Link></li>
            <li><Link to="/format/3" className="dropdown-item">some</Link></li>
            </ul>
            </li>
            </ul>
        </nav>
    )
}

export default Nav
