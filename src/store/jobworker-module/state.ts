import { IJobworker } from './../../interfaces/jobworker.interface';


export interface JobworkerStateInterface {
  createJobworker: IJobworker;
  jobworkers: IJobworker[];
}

function state(): JobworkerStateInterface {
  return {
    createJobworker: {
      jobworkerID: 0,
      jobID: 0,
      workerID: 0,
      jobworkerstatus: '',
    },
    jobworkers: []
  };
}

export default state;
