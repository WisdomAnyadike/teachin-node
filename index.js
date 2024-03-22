const express = require('express')
const env = require('dotenv').config()
const app =  express()
const port = 3200
const cors = require('cors')
const UserRouter = require('./Routes/userRoutes')
const connectToDb = require('./Config/DbConnect')


app.use(express.json())
app.use(cors({origin: "*" }))
app.use( '/Api/User' , UserRouter)




app.listen(port , ()=> {
    console.log(`we are running on http://localhost:${port}`);
})

connectToDb()
