import {useState,useEffect} from "react"
import { useParams } from "react-router"
import axios from "axios";

const AllBooks =({Books})=> {

    return(
        <main className="main" id="teamMain">
            <div className="container">
                <h3 className="display-3 text-capitalize">Books</h3>
                <div className="row row-cols-1 row-cols-md-5">

                </div>
            </div>
        </main>
    )
}

export default AllBooks 