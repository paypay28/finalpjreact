import { useEffect, useState } from "react"
import {Routes, Route} from "react-router"
import axios from 'axios';
import { useParams } from "react-router"


import Header from "./components/Header"
import Footer from "./components/Footer"
import AllBooks from './components/AllBooks'
import SingleBook from './components/SingleBook'
import AllAuthor from './components/AllAuthor'
import AuthorCard from './components/AuthorCard'
import BooksByAuthor from './components/BooksByAuthor'
import AllPublisher from './components/AllPublisher'
import BooksByGenre from "./components/BooksByGenre";
import PublisherCard from './components/PublisherCard'
import BooksByPublisher from "./components/BooksByPubisher";
import BooksByFormat from "./components/BooksByFormat";

import AddBookForm from "./components/AddBookForm";
import Main from "./components/Main";

import Error from './components/Error'

const App =()=> {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        const url = 'http://localhost:3008/api/book'

        axios.get(url).then(res => setBooks(res.data)) 
    },[])


    
    const [ authors, setAuthors ] = useState([])

    useEffect(()=> {
        const url = 'http://localhost:3008/api/author'

        axios.get(url).then(res => setAuthors(res.data))
    }, [])


      const [ publishers, setPublisher ] = useState([])

    useEffect(()=> {
        const url = 'http://localhost:3008/api/publisher'

        axios.get(url).then(res => setPublisher(res.data))
    }, [])

        const [ bookgenre, setBookGenre ] = useState([])

const params = useParams()

useEffect(()=> {
    const url = `http://localhost:3005/api/genre/genre/${params.id}`
    axios.get(url).then(res => setBookGenre(res.data))
}, [])



    return(
        <>
        <Header/>
        <Routes>
            <Route path="/" element={ <AllBooks books={books} />} />
            <Route path="/book/:id" element={<SingleBook />} />

            <Route path="/AddBookForm" element={<AddBookForm />} />

           
            <Route path="/author" element={ <AllAuthor authors={authors} />} />
           <Route path="/author/:id" element={ <BooksByAuthor />} />

            <Route path="/publisher" element={ <AllPublisher publishers={publishers} />} />
         <Route path="/publisher/:id" element={ <BooksByPublisher />} />

         <Route path="/genre/:id" element={ <BooksByGenre />} />

            <Route path="/format/:id" element={ <BooksByFormat />} />

         

            <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
        </>
    )
}

export default App