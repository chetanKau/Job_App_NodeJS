const express = require('express')

const router = express.Router()

const jobConroller = require('./../controller/job.controller')



router.post('/api/job', jobConroller.createJob)

router.get('/api/job', jobConroller.getJob)

router.put('/api/job/:id', jobConroller.updateJob)

router.delete('/api/job/:id', jobConroller.deleteJob)




module.exports = router;