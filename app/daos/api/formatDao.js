
const con = require('../../config/dbconfig')

const formatDao = {
    table: 'format',

    findBooksByFormat: (res, id) => {
        con.execute(
            `select b.book_id, b.title, a.author, p.publisher, b.copyright_year, b.qty, b.edition, b.edition_year, b.binding, b.rating, b.language, b.num_pages, b.qty, f.format
            from book b
            join author a using (author_id)
            join publisher p using (publisher_id)
            join book_to_format bf on b.book_id = bf.book_id
            join format f on f.format_id = bf.format_id
            where f.format_id = '${id}'
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

module.exports = formatDao