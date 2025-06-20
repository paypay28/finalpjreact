const con = require('../../config/dbconfig')


const publisherDao = {
    table: 'publisher',

    findBooksByPublisher: (res, table, id) => {
        con.execute(
            `select b.book_id, b.title, b.publisher_id, b.rating, b.qty, a.author, p.publisher, b.copyright_year, b.edition, b.edition_year, b.binding, b.rating, b.language, b.num_pages
            from book b
            join author a using (author_id)
            join publisher p using (publisher_id)
            where p.publisher_id = '${id}'
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

module.exports = publisherDao