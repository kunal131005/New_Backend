import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

// setting up middlewares

//1st setting a imit for the json file that till that limit data can came
app.use(express.json({limit:"10kb"}))

//2nd setting the url encoders, for example you see some url on the google, then you will find in that there are %20f for space and + for something
app.use(express.urlencoded({extended:true, limit : "10kb"}))

//3rd setting the public folder as it will store the uploaded docs or photos by teh user hich we want to store on the server
app.use(express.static("public"))

//4th apne server se user ke browser ki cookies access le paaye or uski cookies ko set kar paye using the cookie parser
app.use(cookieParser())

export { app }