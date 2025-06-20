import {Link} from "react-router"

const BookCard =(props)=> {

    return(
    <div className="col">
            <div className="card book-card h-100">
                <img src={`/images/${props.cover_image}`}alt={props.title} className="img-fluid image card-img-top h-100" />
                
                
            <footer className="card-footer">
                <Link to={`/book/${props.id}`} className="card-bottom-text btn btn-bold btn-dark">view more</Link>
            </footer>
            </div>
        </div>
    )
}

export default BookCard 