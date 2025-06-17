import { useState, useEffect } from "react"; 
import axios from 'axios'

import AllDataCard from './AllDataCard'

const AllDataCard =( {table, name} ) => {

    const AllData =( {table,name} )=> {
        const [ dataArr, setData ] = useState([])

        useEffect(()=> {

            const url = ` http://localhost:3008/api/${table}`

            axios.get(url).then(res => setDataArr(res.data))
        },[table])

        const allDataCardComponents = dataArr.map(item =>{

            return(
                <AllDataCard
                key={item.Book_id || item.Author_id || item.publisher_id }
                table={table}
                data={item}
                name={item.book || item.author || item.publisher}
                />
            )
        })

        return(
            <main className="main" id="bookMain">
                <div className="container">
                    <h2 className="book-heading">all{name}</h2>
                    <div className="row row-cols-1 row-cols-md-3">
                        {allDataCardComponents}
                    </div>
                </div>
            </main>
        )
    }
}

export default AllData 