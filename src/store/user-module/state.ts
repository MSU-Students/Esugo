import { IJob } from 'src/interfaces/job.interface2';
import { IUser } from 'src/interfaces/user.interface2';

export interface UserStateInterface {
  user: IUser;
  users: IUser[];
  jobs: IJob[];
}

function state(): UserStateInterface {
  return {
    user: {
      firstName: '',
      middleName: '',
      lastName: '',
      birthdate: '',
      gender: '',
      address: '',
      contact: '',
      email: '',
      company: '',
      location: '',
      type: 'worker',
      status: 'available',
      username: '',
      password: '',
      jobs: [],
    },
    users: [],
    jobs: []
  };
}

export default state;
