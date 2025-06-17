import { useEffect, useState } from "react"
import {Routes, Route} from "react-router"
import axios from 'axios';


import Header from "./components/Header"
import Footer from "./components/Footer"
import AllBooks from './components/AllBooks'
import SingleBook from './components/SingleBook'
import Author from './components/Author'
import AuthorCard from './components/AuthorCard'
import Publisher from './components/Publisher'
import PublisherCard from './components/PublisherCard'
import Genre from './components/Genre'
import AllData from './components/AllData'

import Error from './components/Error'

const App =()=> {
    const [book,setBooks] = useState([])

    useEffect(()=>{
        const url = 'http://localhost:3008/api/book'

        axios.get(url).then(res => setBooks(res.data)) 
    },[])

    return(
        <>
        <Header/>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/book" element={<AllBooks table='book' />} />
            <Route path="/book/:id" element={<SingleBook />} />

            <Route path="/AddBookForm" element={<AddBookForm />} />

            <Route path="/author" element={<AllData table="author" name="author" />} />
            <Route path="/author/:endpoint" element={<AllBooks table="author" />} />

            <Route path="/publisher" element={<AllData table="publisher" name="publisher" />} />
            <Route path="/publisher/:endpoint" element={<AllBooks table="publisher"/>} />

            <Route path="/format" element={<AllData table="format" name="format" />} />
            <Route path="/format/:endpoint" element={<AllBooks table="format" />} />

            <Route path="/genre" element={<AllData table="genre" name="genre" />} />
            <Route path="/genre/:endpoint" element={<AllBooks table="genre" />} />

            <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
        </>
    )
}

export default App