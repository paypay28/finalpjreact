import { useState,useEffect } from "react"
import {useParams} from "react-router"
import axios from "axios"

const Genre =()=> {

    const [ genres,setGenres ] = useState([])
    console.log (genres)
    useEffect(()=>{
        const url ='http://localhost:3008/api/genre'
        axios.get(url).then(res => setGenres(res.data))
    },[])
}

export default Genre