import express from 'express'
import controllersJobs from '../controllers/controllers_jobs.js'

const router = express.Router()

router.route('/')
    .post(controllersJobs.createJob)
    .get(controllersJobs.getAllJobs)

router.route('/:id')
    .get(controllersJobs.getJob)
    .delete(controllersJobs.deleteJob)
    .patch(controllersJobs.updateJob)

export default router