const express = require('express')
const server = express()
const router = require('./routes/router')
const helmet = require('helmet')
const cors = require('cors')
const PORT = process.env.PORT || 3008

// Handle security
server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false, 
    directives: {
        "img-src": ["'self'", "https: data"],
        "scriptSrc": ["'self'", "cdn.jsdelivr.net"]
    }
})
)

server.use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true}))

// localhost:3000 => router.js
server.use('/', router)

server.listen(PORT,()=> console.log(`Port ${PORT} Choose a book...`))