// require('dotenv').config({path: './env'})

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import express from "express"
import dotenv from "dotenv"
// import 'dotenv/config'
import connectDB from './db/index.js'


dotenv.config({
    path: "./env"
})

connectDB()






























// const app = express();

// ( async ()=>{
//     try {
//         await mongoose.connect(`${process.env.DARABASE_URI}/${DB_NAME}`)
        
//         app.on("error", (error)=> {
//             console.log("Error: ", error)
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log("App is listening on port ", process.env.PORT)
//         })
//     } catch (error) {
//         console.error("Error: ", error)
//     }
// })()
