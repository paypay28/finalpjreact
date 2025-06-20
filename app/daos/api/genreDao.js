const con = require('../../config/dbconfig')

const genreDao = {
    table: 'genre',

    findBooksByGenre: (res, table, id) => {
        con.execute(
            `select b.book_id, b.title, a.author, p.publisher, b.copyright_year, b.edition, b.edition_year, b.binding, b.rating, b.language, b.num_pages, g.genre
            from book b
            join author a using (author_id)
            join publisher p using (publisher_id)
            join book_to_genre bg on b.book_id = bg.book_id
            join genre g on g.genre_id = bg.genre_id
            where g.genre_id= '${id}'
            order by b.book_id;`,
            (error, rows)=> {
                if (!error) {
                    res.json(rows)
                } else {
                    console.log('DAO ERROR:', error)
                }
            }
        )
    }
}

module.exports = genreDao