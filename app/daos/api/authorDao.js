const con = require('../../config/dbconfig')

const authorDao = {
    table: 'author',

    findBooksByAuthor: (res, table, id) => {
        con.execute(
            `select b.book_id, b.author_id, b.title, a.author, p.publisher, b.copyright_year, b.edition, b.edition_year, b.binding, b.rating, b.language, b.num_pages
            from book b
            join author a using (author_id)
            join publisher p using (publisher_id)
            where a.author_id = '${id}'
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

module.exports = authorDao