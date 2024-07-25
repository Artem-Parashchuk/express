import express from "express";
import cors from "cors";

import db from "./db/db.js";

export const startServer = ()=> {
    const app = express();



    app.use(cors());

    app.get("/authors", (req, res) => {
        res.json(db.authors);
    })

    app.get("/songs", (req, res) => {
        res.json(db.songs);
    })

    app.use((req, res)=> {
        res.status(404).json({
            message: `${req.url} Not Found`
        })
    })

    app.use((error, req, res, next)=> {
        res.status(500).json({
            message: "Server error"
        })
    })

    app.listen(3000, () => console.log("Server running on 3000 PORT"));
}
