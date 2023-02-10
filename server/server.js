import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
const morgan = require('morgan')
import {readdirSync} from 'fs'
require('dotenv').config()

//create express app
const app = express()

//db connection
mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
})
    .then(() => console.log("**DB CONNECTED**"))
    .catch((err) => console.log("DB CONNECTION ERR => ", err))

//apply middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
// app.use((req,res,next)=>{
//     console.log("my own middleware")
//     next()
// })

//rout
readdirSync('./routes').map((r)=>{
    app.use('/api', require(`./routes/${r}`))
})

//port
const port = process.env.PORT || 8000
app.listen(port,() => { console.log("server started on port 5000") })