import express from "express";
import cors from "cors";

import { songsRouter } from "./routers/songs-router.js";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import { errorHandler } from "./middlewares/errorHandler.js";


const { PORT } = process.env
export const startServer = () => {
    const app = express();

    app.use(cors());

    
    app.use('/songs', songsRouter)
    
    app.use(notFoundHandler)

    app.use(errorHandler)

    app.listen(PORT, () => console.log(`Server running on ${PORT} PORT`));
}
