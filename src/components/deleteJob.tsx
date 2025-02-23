import { retireJobById } from '../apis/jobs'
import { Job } from '../models/jobsModel'

import { useMutation, useQueryClient } from '@tanstack/react-query'
interface Props {
  deleteId: number
}

function RetireJob({ deleteId }: Props) {
  const queryClient = useQueryClient()
  const addMutation = useMutation({
    mutationFn: async (deleteId: Job['id']) => retireJobById(deleteId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['job'] })
    },
  })

  const handleClick = () => {
    addMutation.mutate(deleteId)
  }

  return (
    <>
      <button onClick={handleClick}>Remove Order Record</button>
    </>
  )
}
export default RetireJob
