import { useQuery } from '@tanstack/react-query'
import { getAllJobs } from '../apis/jobs.ts'
import DropButton from './DropButton.tsx'

function Joblist() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['job'],
    queryFn: () => getAllJobs(),
  })
  // console.log("data===>>>", data)
  if (isPending) {
    return <p>Fetching</p>
  }

  if (isError) {
    console.error(error.message)
    return <p>There has been a messup</p>
  }

  return (
    <>
      <div>
        <p>List Of Jobs</p>
        <DropButton>
          {data?.map((job) => {
            return (
              <li key={job.id}>
                {job.jobDate}, {job.product}, {job.applicationRate},{' '}
                {job.orderNumber}, {job.docketNumber}, {job.driver},{' '}
                {job.truckNumber}, {job.pickup}, {job.cropType},{' '}
                {job.reasonsForFailure}
              </li>
            )
          })}{' '}
        </DropButton>
      </div>
    </>
  )
}

export default Joblist
