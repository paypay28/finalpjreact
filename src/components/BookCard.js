import {Link} from "react-router"

const BookCard =(props)=> {

    return(
        <div className="col">
            <div className="card h-100">
                <img src={props.imgUrl} alt={props.first} className="img-fluid book-image card-img-top"/>
                <div className="card-body">
                    <h2 className="card-title text capitalize">{props.first}{props.last}</h2>
                    <p className="card-item">Book: {props.debut} - {props.ended}</p>
                </div>
                <footer className="card-footer">
                    <p className="card-footer-text">
                        <Link to={`/book/${props.id}`}>More is coming</Link>
                    </p>
                </footer>
            </div>
        </div>
    )
}

export default BookCard 