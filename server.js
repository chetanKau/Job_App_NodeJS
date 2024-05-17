const express = require('express');
const mongoose = require('mongoose');
const jobRouter = require('./routes/job.route')

const app = express()

// express.json is reading all body value
app.use(express.json())

// Connecting my app with mongodb using mongoose
mongoose.connect('mongodb+srv://chetankaushik29:MKxKjzwLzq5ZXrbB@jobapp.gfmg2tl.mongodb.net/')
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