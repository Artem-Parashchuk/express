import { Router } from "express";

import songControllers from '../controllers/songs-controllers.js'
import { isValidId } from "../middlewares/isValidId.js";

export const songsRouter = Router()

songsRouter.get("/", songControllers.getSongsControllers)

songsRouter.get("/:id", isValidId, songControllers.getSongsByIdControllers)