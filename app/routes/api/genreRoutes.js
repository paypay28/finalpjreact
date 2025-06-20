const express = require('express')
const router = express.Router()

const { genreDao: dao } = require('../../daos/dao')

router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})


router.get('/count', (req, res)=> {
    dao.countAll(res, dao.table)
})

router.get('/genre/:id', (req, res)=> {
    dao.findBooksByGenre(res, dao.table, req.params.id)
})

router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})



module.exports = router