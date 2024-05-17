const express = require('express');
const mongoose = require('mongoose');
const jobRouter = require('./routes/job.route')

const app = express()

// express.json is reading all body value
app.use(express.json())

// Connecting my app with mongodb using mongoose
mongoose.connect('mongodb://localhost:27017/jobapp')
    .then(() => {
        console.log("Connection with Database established successfull")
    })
    .catch((err) => {
        console.log("Error is ", err)
    })


app.use(jobRouter)


app.listen(8080, () => {
    console.log(`Your server is runnig at port 8080`);
})