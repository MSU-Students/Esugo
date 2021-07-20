import { IJob } from 'src/interfaces/job.interface';

export interface JobStateInterface {
  createJob: IJob;
  jobs: IJob[];
}

function state(): JobStateInterface {
  return {
    createJob: {
      jobID: 0,
      employerID: 0,
      jobtitle: '',
      jobdesc: '',
      salary: 0,
      dateposted: '',
      jobstatus: ''
    },
    jobs: []
  };
}

export default state;
