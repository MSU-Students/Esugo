import { DefaultApi } from './rest-api/api';
import { UserDto } from './rest-api';
import { restApi } from './rest-api.service';

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
    return res.data;
  }

  async delete(id: number) {
    const res = await restApi.deleteUser(id);
    return res.data;
  }

  async getUserProfile() {
    const res = await restApi.getProfile();
    return res.data;
  }
}

const userService = new UserService();
export default userService;
