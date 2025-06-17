import {NavLink} from "react-router"

const Nav =()=> {

    return (
        <nav>
            <ul className="nav-list nav">
                <li className="nav-item">
                    <a href="#" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Books</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Author</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Publishers</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Genres</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Formats</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
