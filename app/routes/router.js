const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3008


//Root route => localhost:3000/api
router.get('/api', (req, res)=> {
    res.json({
        'Books': `http://localhost:${PORT}/api/book`,
        'author': `http://localhost:${PORT}/api/author`,
        'publisher': `http://localhost:${PORT}/api/publisher`,
        'genre': `http://localhost:${PORT}/api/genre`,
        'format': `http://localhost:${PORT}/api/format`
        
    })
})

const endpoints = [
    'book',
    'author',
    'publisher',
    'genre',
    'format'
]



endpoints.forEach(endpoint => {
    router.use(`/api/${endpoint}`, require(`./api/${endpoint}Routes`))
})

module.exports = router
