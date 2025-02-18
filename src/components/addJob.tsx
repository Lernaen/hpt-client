import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ChangeEvent, FormEvent, useState } from 'react'
import { NewJob } from '../models/jobsModel'
import { addJob } from '../apis/jobs'

function AddJob() {
  const [docketNumber, setDocketNumber] = useState('')
  const [jobDate, setJobDate] = useState('')
  const [product, setProduct] = useState('')
  const [applicationRate, setApplicationRate] = useState('')
  const [pickup, setPickup] = useState('')
  const [orderNumber, setOrderNumber] = useState('')
  const [truckNumber, setTruckNumber] = useState('')
  const [driver, setDriver] = useState('')
  const [cropType, setCropType] = useState('')
  const [reasonsForFailure, setReasonsForFailure] = useState('')

  const queryClient = useQueryClient()

  const addMutation = useMutation({
    mutationFn: async (newJob: NewJob) => addJob(newJob),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['job'] })
    },
  })

  const onChange = (
    evt: ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<any>>,
  ) => {
    setValue(evt.target.value)
  }

  const onSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    const newJob: NewJob = {
      docketNumber,
      jobDate,
      product,
      applicationRate,
      pickup,
      orderNumber,
      truckNumber,
      driver,
      cropType,
      reasonsForFailure,
    }

    await addMutation.mutate(newJob)
  }

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <div>
          <div>
            <p>Record Job Details here</p>
          </div>
          <div>
            <label htmlFor="DocketNumber">Docket Number </label>
            <input
              className="form__input"
              type="text"
              name="DocketNumber"
              id="DocketNumber"
              value={docketNumber}
              onChange={(e) => onChange(e, setDocketNumber)}
            />
          </div>
          <div>
            <label htmlFor="JobDate">Date of Job </label>
            <input
              className="form__input"
              type="text"
              name="JobDate"
              id="JobDate"
              value={jobDate}
              onChange={(e) => onChange(e, setJobDate)}
            />
          </div>
          <div>
            <label htmlFor="Product">Product </label>
            <input
              className="form__input"
              type="text"
              name="Product"
              id="Product"
              value={product}
              onChange={(e) => onChange(e, setProduct)}
            />
          </div>
          <div>
            <label htmlFor="ApplicationRate">Rate of Application </label>
            <input
              className="form__input"
              type="text"
              name="ApplicationRate"
              id="ApplicationRate"
              value={applicationRate}
              onChange={(e) => onChange(e, setApplicationRate)}
            />
          </div>
          <div>
            <label htmlFor="Pickup">Pickup </label>
            <input
              className="form__input"
              type="text"
              name="Pickup"
              id="Pickup"
              value={pickup}
              onChange={(e) => onChange(e, setPickup)}
            />
          </div>
          <div>
            <label htmlFor="OrderNumber">Order Number </label>
            <input
              className="form__input"
              type="text"
              name="OrderNumber"
              id="OrderNumber"
              value={orderNumber}
              onChange={(e) => onChange(e, setOrderNumber)}
            />
          </div>
          <div>
            <label htmlFor="TruckNumber">Truck Number </label>
            <input
              className="form__input"
              type="text"
              name="TruckNumber"
              id="TruckNumber"
              value={truckNumber}
              onChange={(e) => onChange(e, setTruckNumber)}
            />
          </div>
          <div>
            <label htmlFor="Driver">Driver </label>
            <input
              className="form__input"
              type="text"
              name="Driver"
              id="Driver"
              value={driver}
              onChange={(e) => onChange(e, setDriver)}
            />
          </div>
          <div>
            <label htmlFor="CropType">Crop Type </label>
            <input
              className="form__input"
              type="text"
              name="CropType"
              id="CropType"
              value={cropType}
              onChange={(e) => onChange(e, setCropType)}
            />
          </div>
          <div>
            <label htmlFor="ReasonsForFailure">Reason for Failure </label>
            <input
              className="form__input"
              type="text"
              name="ReasonsForFailure"
              id="ReasonsForFailure"
              value={reasonsForFailure}
              onChange={(e) => onChange(e, setReasonsForFailure)}
            />
          </div>
        </div>

        <button type="submit" className="button-primary">
          Upload
        </button>
      </form>
    </>
  )
}

export default AddJob
