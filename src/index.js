// require('dotenv').config({ppth:'./env'}) 
// so that if we run one file, along with that all the files have access to the enviornment variables

import dotenv from "dotenv"

import mongoose from 'mongoose'
import { DB_NAME } from './constants.js';
import connectDB from './db/index.js';

dotenv.config({
    oath: './env'
})

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("Error", error);
            throw error;
        })
        // app.listen se pahle error handling karne ke liye app.on ka use karna hota hai
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port ${process.env.PORT}`)
        })
    }).catch((err) => {
        console.log("MONGO db connection failed !!!!", err)
    })

// 1st approach for connecting a DB
// 2nd approach is in DB folder for better production development
/*
import express from 'express'

const app = express()

;( async ()=> {
    try{
        // use await and connect database from mongoose take the url from teh .env file and also take teh name of teh data base form the constants.js file using /
        await mongoose.connect(`${process.env.MONGODB_URI}/${
            DB_NAME
        }`)
        // after connecting to the database, there is error handling with express which is like database is connected but the express is not listening
        app.on("error", (error)=>{
            console.log("Error", error);
            throw error;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }catch(error){
        console.log("Error:",error);
        throw error
    }
})()

*/