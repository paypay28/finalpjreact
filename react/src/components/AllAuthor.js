

import AuthorCard from "./AuthorCard"


const AllAuthor =({ authors })=> {
    


    const AuthorComponents = authors.map(author => {
        return (
            
            <AuthorCard 
            key={author.author_id}
            id={author.author_id}
            title={author.author}
            img_url={author.img_url}
            />
        )
    })




    return(
        <main className="main" id="allAuthorMain">
            <div className="container">
                
                <section className="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-4 mt-5">
                    { AuthorComponents }
                </section>
            </div>
        </main>
    )
}


export default AllAuthor