import { useState,useEffect } from "react";
import {useParams} from 'react-router'
import axios from 'axios'

const SingleBook =()=>{

    const[book,setBook ] = useState({})

    const params = useParams()

    useEffect(()=>{
        const url = `http://localhost:3008/api/books/${params.id}`

        axios.get(url).then(res =>{
            setBook(res.data)
        })
    },[])
}

return(
    <main className="single-book" id="SingleBookMain">
                <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="single-book-heading">{book.title}</h2>
                        <img src={`/images/${book.cover_image}`} alt="placeholder img" className="img-fluid image cover-single-img" />
                    </div>
                    <div className="col">
                        <h3 className="book-info">Info</h3>
                        <ul className="book-info-list list-group list-group-flush">
                            <li className="list-group-item">Author: {book.author_name}</li>
                            <li className="list-group-item">Publisher: {book.company_name}</li>
                            <li className="list-group-item">Copyright Year: {book.copyright_year}</li>
                            <li className="list-group-item">Format: {book.format}</li>
                            <li className="list-group-item">Genre:{book.genre}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )

export default SingleBook
