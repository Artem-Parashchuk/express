import express from 'express'
import cors from 'cors'
import pino from 'pino-http'
import db from './db/db.js'

const app = express()
const logger = pino({
    transport: {
        target: "pino-pretty"
    }
})

// використання бібліотеки cors для дозволу CORS запитів
app.use(cors())
app.use(logger)

// Міделвара для дозволу CORS
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// })

app.get('/authors', (req, res) => {
    res.json(db.authors)
})
app.get('/songs', (req, res) => {
    res.json(db.songs)
})

app.use((req, res) => {
    res.status(404).json({
        message: `${req.url} Not Found`
    })
})

app.listen(3000, () => console.log('Server starting on 3000 PORT'))

// app.use((req, res, next) => {
//     console.log('First middleware')
//     next()
// })
// app.use((req, res, next)=> {
//     console.log('Second middleware')
//     next()
// })

