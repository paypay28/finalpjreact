import { Link } from 'react-router'



const Nav = () => {
    return (
        <nav>
            <ul className="nav-list nav justify-content-center gap-4" >
                <li className="nav-item">
                    <Link to="/" className="nav-link btn btn-dark" >All Books</Link>
                </li>
                <li className="nav-item ">
                    <Link to="/author" className="nav-link btn btn-dark">Authors</Link>
                </li>
                <li className="nav-item">
                    <Link to="/publisher" className="nav-link btn btn-dark">Publishers</Link>
                </li>
                <li className="nav-item">
                    <Link to="/bookForm" className="nav-link btn btn-dark">Post Your Book</Link>
                </li>
                <li className="nav-item dropdown">
                    <button
                        className="nav-link dropdown-toggle btn btn-dark"
                        id="genreDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Genres
                    </button>
                    <ul className="dropdown-menu genre-dropdown" aria-labelledby="genreDropdown ">
                <li><Link to="/genre/1" className="dropdown-item">Urban Fiction</Link></li>
                <li><Link to="/genre/2" className="dropdown-item">Romance Fiction</Link></li>
                <li><Link to="/genre/3" className="dropdown-item">Southern Gothic </Link></li>
                <li><Link to="/genre/4" className="dropdown-item">Young Adult Fiction</Link></li>
                <li><Link to="/genre/5" className="dropdown-item">Fantasy Fiction</Link></li>
                <li><Link to="/genre/6" className="dropdown-item">Science Fiction/Young Adult</Link></li>
                <li><Link to="/genre/7" className="dropdown-item">Romance Fiction</Link></li>
                <li><Link to="/genre/8" className="dropdown-item">Dystopian</Link></li>
                <li><Link to="/genre/9" className="dropdown-item">Young Adult Fiction</Link></li>
                <li><Link to="/genre/10" className="dropdown-item">Adventure</Link></li>
                    </ul>
                </li>

                <li className="nav-item dropdown">
                    <button
                        className="nav-link dropdown-toggle btn btn-dark"
                        id="formatDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Formats
                    </button>
                    <ul className="dropdown-menu format-dropdown" aria-labelledby="formatDropdown">
                        <li><Link to={`/format/1`} className="dropdown-item dropdown-link">Physical</Link></li>
                        <li><Link to={`/format/2`} className="dropdown-item dropdown-link">E-Book</Link></li>
                        <li><Link to={`/format/3`} className="dropdown-item dropdown-link">Audio</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

