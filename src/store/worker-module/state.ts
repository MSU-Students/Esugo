import { IWorker } from 'src/interfaces/worker.interface';

export interface WorkerStateInterface {
  createWorker: IWorker;
  workers: IWorker[];
}

function state(): WorkerStateInterface {
  return {
    createWorker: {
    id: 0,
    firstName: '',
    middleName: '',
    lastName: '',
    dateofbirth: '',
    gender: '',
    email: '',
    acctStatus: '',
    username: '',
    password: '',
    },
    workers: []
  };
}

export default state;
