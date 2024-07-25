import mongoose from "mongoose";

export const initMongoDB = async() => {
    try{
        const DB_HOST = "mongodb+srv://Artem:BK2ufNKSj1VhcRmz@cluster0.wjqfzxh.mongodb.net/my-songs?retryWrites=true&w=majority&appName=Cluster0";
        await mongoose.connect(DB_HOST);
        console.log('Successfully connection to MongoDB');
    }catch(error) {
        console.log(error.message);
    }
};