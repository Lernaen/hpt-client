import request from 'superagent'
import { Job, NewJob } from '../models/jobsModel'

export async function getAllJobs() {
  const res = await request.get('/api/v1/jobs')
  return res.body as Job[]
}

export async function getJobById(id: number) {
  const res = await request(`/api/v1/jobs/${id}`)
  return res.body as Job
}

export async function addJob(newjob: NewJob) {
  const res = await request.post(`/api/v1/jobs`).send(newjob)
  console.log(res.statusCode)
  return
}
