import express from "express";
import cors from "cors";

import db from "./db/db.js";
import { getSongs, getSongById } from "./services/song-services.js";

const { PORT } = process.env
export const startServer = () => {
    const app = express();

    app.use(cors());

    app.get("/authors", (req, res) => {
        res.json(db.authors);
    })

    app.get("/songs", async (req, res) => {
        const data = await getSongs()
        res.json({
            status: 200,
            message: 'Songs get successfully',
            data,
        });
    })
    app.get("/songs/:id", async (req, res) => {
        const { id } = req.params

        const data = await getSongById(id)

        if (!data) {
            return res.status(404).json({
                status: 404,
                message: `Song with id=${id} not found`,
                data: {
                    message: `Song with id=${id} not found`
                }
            })
        }

        res.json({
            status: 200,
            message: `Song with id=${id} get successfully`,
            data
        })
    })

    app.use((req, res) => {
        res.status(404).json({
            message: `${req.url} Not Found`
        })
    })

    app.use((error, req, res, next) => {
        res.status(500).json({
            message: "Server error"
        })
    })

    app.listen(PORT, () => console.log(`Server running on ${PORT} PORT`));
}
