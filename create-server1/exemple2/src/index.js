import express from 'express'
import db from './db/db.js'

const app = express()

app.get('/songs', (req, res) => {
    res.json(db.songs)
})

app.listen(3000, () => console.log('Server running on 3000 PORT'))