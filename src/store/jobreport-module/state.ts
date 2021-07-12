import { IJobreport } from './../../interfaces/jobreport.interface';


export interface JobreportStateInterface {
  createJobreport: IJobreport;
  jobreports: IJobreport[];
}

function state(): JobreportStateInterface {
  return {
    createJobreport: {
      jobreportID: 0,
      userID: 0,
      jobID: 0,
    },
    jobreports: []
  };
}

export default state;
