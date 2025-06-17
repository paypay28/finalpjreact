const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000

router.use(express.static('public'))

//Root route => localhost:3000/api
router.get('/api',(req,res)=> {
    res.json({
        'Books':`http://localhost:${PORT}/api/book`,
        'title':`http://localhost:${PORT}/api/title`,
        'author':`http://localhost:${PORT}/api/author`,
        'publisher':`http://localhost:${PORT}/api/publisher`,
        'copyright_year':`http://localhost:${PORT}`
    })
})
module.exports = router