

import BookCard from "./BookCard";

const AllBooks =({ books })=> {

const cardComponents = books.map(book => {
    return(
        <BookCard 
        key={book.book_id}
        id={book.book_id}
        title={book.title}
        />
    )
})



    return(
        <main className="main" id="teamMain">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-5">
                    { cardComponents }
                </div>
            </div>
        </main>
    )
}

export default AllBooks 