import { IEmployer } from './../../interfaces/employer.interface';

export interface EmployerStateInterface {
  createEmployer: IEmployer;
  employers: IEmployer[];
}

function state(): EmployerStateInterface {
  return {
    createEmployer: {
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
    employers: []
  };
}

export default state;
