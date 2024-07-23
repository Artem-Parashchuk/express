import express from 'express'
import cors from 'cors'

import db from './db/db.js'

export const startServer = () => {
    const app = express()
    app.use(cors())

    app.get('/authors', (req, res) => {
        res.json(db.authors)
    })
    app.get('/songs', (req, res) => {
        res.json(db.songs)
    })

    
    app.use((req, res, next) => {
        res.status(404).json({
            message: `${req.url} Not Found`
        })
        next()
    })
    app.use((error, req, res, next) => {
        res.status(500).json({
            message: 'Server Error'
        })
        next()
    })
    app.listen(3000, () => {
        console.log('Server running no 3000 PORT')
    })
} 