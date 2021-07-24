import { JobDto, UserDto } from 'src/services/rest-api';

export interface JobStateInterface {
  job: JobDto;
  jobs: JobDto[];
  user: UserDto;
}

function state(): JobStateInterface {
  return {
    job: {
      title: '',
      description: '',
      location: '',
      salary: '',
      status: 'pending',
      coverPhoto: '',
      datePosted: '',
      employerID: 1,
    },
    jobs: [],
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
      status: 'pending',
      username: '',
      password: ''
    }
  };
}

export default state;
