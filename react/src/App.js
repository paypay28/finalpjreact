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
import BooksByFormat from "./components/BookByFormat"
import BookForm from "./components/BookForm";

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


    const [ formData, setFormData ] = useState({
            title: '',
            author_id: 0,
            publisher_id: 0,
            copyright_year: 1900,
            edition: '',
            edition_year: 1900,
            binding: '',
            rating: 1,
            language: '',
            num_pages: '',
            qty: 1,
            cover_image: ''
    })

    const [ isPostSuccess, setIsPostSuccess] = useState({
        isSuccess: false,
        id: 0
    })

    const resetData=()=> {
        setIsPostSuccess({
            isSuccess: false,
            id: 0
        })

        setFormData({
            title: '',
            author_id: 0,
            publisher_id: 0,
            copyright_year: 1900,
            edition: '',
            edition_year: 1900,
            binding: '',
            rating: 1,
            language: '',
            num_pages: '',
            qty: 1,
            cover_image: ''
        })
    }

    const handleSubmit =(e)=> {
        e.preventDefault()
        console.log(formData)

        axios({
            method: 'post',
            url: 'http://localhost:3008/api/book/post',
            data: formData
        }).then(response => {
            setIsPostSuccess({isSuccess: true, id: response.data.Last_id})
        })
    }

    const handleChange =(event)=> {
        const { name, value } = event.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }


    return(
        <>
        <Header/>
        <Routes>
            <Route path="/" element={ <AllBooks books={books} />} />
            <Route path="/book/:id" element={<SingleBook />} />


            <Route path="/author" element={ <AllAuthor authors={authors} />} />
            <Route path="/author/:id" element={ <BooksByAuthor />} />

            <Route path="/publisher" element={ <AllPublisher publishers={publishers} />} />
            <Route path="/publisher/:id" element={ <BooksByPublisher />} />

            <Route path="/genre/:id" element={ <BooksByGenre />} />

            <Route path="/format/:id" element={ <BooksByFormat />} />

            <Route 
                    path="/bookForm" element={ <BookForm handleSubmit={ handleSubmit } handleChange={handleChange} formData={formData}  isPostSuccess={isPostSuccess}/>} />
            <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
        </>
    )
}

export default App