export interface Job {
  id: number
  jobDate: string
  product: string
  applicationRate: string
  pickup: string
  docketNumber: string
  orderNumber: string
  truckNumber: string
  driver: string
  cropType: string
  reasonsForFailure: string
}

export interface NewJob {
  jobDate: string
  product: string
  applicationRate: string
  pickup: string
  docketNumber: string
  orderNumber: string
  truckNumber: string
  driver: string
  cropType: string
  reasonsForFailure: string
}
