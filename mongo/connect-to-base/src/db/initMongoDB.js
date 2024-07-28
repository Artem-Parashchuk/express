import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
// import { DB_HOST } from "../config.js";
const { DB_HOST } = process.env

export const initMongoDB = async() => {
    try{
        await mongoose.connect(DB_HOST);
        console.log('Successfully connection to MongoDB');
    }catch(error) {
        console.log(error.message);
    }
};