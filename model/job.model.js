const { debugErrorMap } = require('firebase/auth/web-extension');
const mongoose = require('mongoose');



const jobSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    company: {
        type: String
    },
    location: {
        type: String
    },
    salary: {
        type: Number,
        default:0
    }
}
)

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;