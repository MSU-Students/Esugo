import { DefaultApi } from './rest-api/api';
import { Configuration } from './rest-api';

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
  async getAll() {
    const res = await restApi.getUsers();
    return res.data;
  }

  async getOne(id: number) {
    const res = await restApi.getUser(id);
    return res.data;
  }

  async create(payload: any) {
    const res = await restApi.addUser(payload);
    return res;
  }

  async update(id: number, payload: any) {
    const res = await restApi.updateUser(id, payload);
    return res;
  }

  async delete(id: number) {
    const res = await restApi.deleteUser(id);
    return res;
  }
}

const userService = new UserService();
export default userService;
