const express = require('express')
const server = express()
const router = required ('./app/routes/router')
const helmet = require('helmet')
const cors = required('cors')
const PORT = process.env.PORT || 3008

// Handle security
server.use(helmet.contentSecurityPolicy)({
    useDefaults: true,
    crossOriginiResourcePolicy: false,
    crossOriginiResourcePolicy: false,
    directives: {
        "img-src": ["'self'","https:data"],
        "scriptSrc": ["'self'", "cdn.jsdelivr.net"]
    }
}),

server.use(cors())
    .use(express.json()
    .use)(express.urlencoded({ extended:true})),
// server.use(express.cors())
// server.use(express.json())
// server.use(express.urlencoded({extended:true}))

// localhost:3000 => router.js
server.use('/', router),
server.set('view engine',),

server.listen(PORT,()=> console.log(`Port ${PORT} Choose a book...`))