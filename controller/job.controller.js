
const Job = require("./../model/job.model")

const createJob = async (req, res) => {
    const newJob = await new Job(req.body)
    const savedData = await newJob.save();

    // console.log(savedData);
    res.send(savedData)
}
const getJob = (req, res) => {
    res.json({
        statu: "success",
        message: "Job sends successfully"
    })
}

const updateJob = (req, res) => {
    res.json({
        statu: "success",
        message: "Job updated successfully"
    })
}
const deleteJob = (req, res) => {
    res.json({
        statu: "success",
        message: "Job deleted successfully"
    })
}

const jobController = {
    createJob,
    getJob,
    updateJob,
    deleteJob
}

module.exports = jobController;