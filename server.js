const express = require('express');
const mongoose = require('mongoose');
const jobRouter = require('./routes/job.route')
const dotenv=require('dotenv')


const app = express()
dotenv.config();

// express.json is reading all body value
app.use(express.json())
const dbConnectUrl=process.env.DB_Connect_Url
// console.log(process.env.DB_Connect_Url);
// Connecting my app with mongodb using mongoose
mongoose.connect(`${dbConnectUrl}`)


    .then(() => {
        console.log("Connection with Database established successfull")
    })
    .catch((err) => {
        console.log("Error is ", err)
    })


app.use(jobRouter)


app.listen(10000, () => {
    console.log(`Your server is runnig at port 10000`);
})