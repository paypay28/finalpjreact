import {Link} from "react-router"

const BookCard =(props)=> {

    return(
        <div className="col">
            <div className="card book-card h-75">
                {/* <img src={`/images/${props.cover_image}`}alt={props.title} className="img-fluid image card-img-top h-100" /> */}
                <img src="https://placehold.co/50x50"alt="placeholder img" className="img-fluid image" />

                <div className="card-body">
                <h3 className="card-title">{props.title}</h3>

                </div>
            <footer className="card-footer">
                <Link to={`/book/${props.id}`} className="card-bottom-text">view more</Link>
            </footer>
            </div>
        </div>
    )
}

export default BookCard 