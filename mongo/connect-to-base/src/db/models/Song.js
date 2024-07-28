import { Schema, model } from "mongoose";

const songSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    }
})

export const Song = model('song', songSchema)