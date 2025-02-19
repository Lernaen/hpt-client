import request from 'superagent'
import { Job, NewJob } from '../models/jobsModel'
const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

export async function getAllJobs() {
  const res = await request.get(`${BASE_URL}/api/v1/jobs`)
  console.log('resBody', res.body)
  return res.body as Job[]
}

export async function getJobById(id: number) {
  const res = await request(`${BASE_URL}/api/v1/jobs/${id}`)
  return res.body as Job
}

export async function addJob(newjob: NewJob) {
  const res = await request.post(`${BASE_URL}/api/v1/jobs`).send(newjob)
  console.log(res.statusCode)
  return res.body as Job
}
