import { IUser } from 'src/interfaces/user.interface';

export interface UserStateInterface {
  createUser: IUser;
  users: IUser[];
}

function state(): UserStateInterface {
  return {
    createUser: {
      id: 0,
      firstName: '',
      middleName: '',
      lastName: '',
      dateofbirth: '',
      gender: '',
      email: '',
      acctStatus: '',
      acctCategory: '',
      username: '',
      password: ''
    },
    users: [],
  };
}

export default state;
