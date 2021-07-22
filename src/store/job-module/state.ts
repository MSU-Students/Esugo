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
      description: 'string',
      location: 'string',
      salary: 0,
      status: 'pending',
      datePosted: Date(),
      userId: 0
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
      status: 'available',
      username: '',
      password: ''
    }
  };
}

export default state;
