
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import axios from "axios"
import BookCard from "./BookCard"


const BooksByGenre =()=> {

    const [ bookgenre, setBookGenre ] = useState([])

    const params = useParams()

    useEffect(()=> {
    const url = `http://localhost:3008/api/genre/genre/${params.id}`
    axios.get(url).then(res => setBookGenre(res.data))
}, [params.id])

    const BookCardComponents = bookgenre.map(book => {
        return (
            <BookCard
                key={book.book_id}
                id={book.book_id}
                title={book.title}
                // cover_image={book.cover_image}
            />
        )
    })

        return (
        <main className="main" id="allBooksMain">
            <div className="container">
                <section className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-5">
                    { BookCardComponents }
                </section>
            </div>
        </main>
    )



}

export default BooksByGenre