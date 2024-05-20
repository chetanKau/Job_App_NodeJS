
const Job = require("./../model/job.model")

const createJob = async (req, res) => {
    try {
        const newJob = await new Job(req.body)
        const savedData = await newJob.save();

        // console.log(savedData);
        res.send(savedData)

    } catch (error) {

        console.log(err, "Something went wrong please try again later")
    }

}
const getJob = async (req, res) => {

    try {

        const { min_sal, max_sal } = req.query
        const jobList = await Job.find({
            $and: [{ salary: { $gte: min_sal } },
            { salary: { $lte: max_sal } }],
        })

        res.json({
            statu: "success",
            message: "Jobs based on Search reacieved successfully",
            jobs: jobList
        })
    } catch (error) {
        console.log(err, "Something went wrong while getting data, please try again later")

    }


}

const updateJob = async (req, res) => {
    try {
        const jobId = req.params.id;

        await Job.findByIdAndUpdate(jobId, req.body)

        // const findObj={
        //     company:"Flipkart"
        // }
        // const updateObj={
        //     salary:90000
        // }
        // JobModel.findOneAndUpdate(findObj, updateObj)

        res.json({
            statu: "success",
            message: "Job updated successfully",
        })

    } catch (error) {
        console.log(err, "Something went wrong while updating data, please try again later")

    }



}
const deleteJob = async (req, res) => {
    try {
        const jobId = req.params.id
        await Job.findByIdAndDelete(jobId)
        res.json({
            statu: "success",
            message: "Job deleted successfully"
        })

    } catch (error) {

    }


}

const jobController = {
    createJob,
    getJob,
    updateJob,
    deleteJob
}

module.exports = jobController;