import { IApplication } from 'src/interfaces/application.interface';


export interface ApplicationStateInterface {
  application: IApplication;
  applications: IApplication[];

}

function state(): ApplicationStateInterface {
  return {
    application: {
      id: 0,
      jobID: 0,
      workerID: 0,
      employerID: 0,
      status: 'pending',
    },
    applications: [],
  };
}

export default state;
