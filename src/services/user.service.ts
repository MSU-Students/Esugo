import { DefaultApi } from './rest-api/api';
import { Configuration, UserDto } from './rest-api';

const dev = 'http://localhost:3000';

const restConfig = new Configuration({
  basePath: dev,
  baseOptions: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
});

const restApi = new DefaultApi(restConfig);

class UserService extends DefaultApi {
  async getAll(): Promise<UserDto> {
    const res = await restApi.getUsers();
    return res.data;
  }

  async getOne(id: number): Promise<UserDto> {
    const res = await restApi.getUser(id);
    return res.data;
  }

  async create(payload: any): Promise<UserDto> {
    const res = await restApi.addUser(payload);
    return res.data;
  }

  async update(id: number, payload: any) {
    const res = await restApi.updateUser(id, payload);
    return res;
  }

  async delete(id: number) {
    const res = await restApi.deleteUser(id);
    return res;
  }

  async getUserProfile() {
    const res = await restApi.getProfile();
    return res;
  }
}

const userService = new UserService();
export default userService;
