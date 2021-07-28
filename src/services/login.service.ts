import { restApi } from './rest-api.service';

class LoginService {
  async loginUser(username: string, password: string, type: string) {
    console.log(username, password, type);
    const response = await restApi.login(username, password, type);
    console.log(response);
    if (response.status == 201) {
      localStorage.setItem('access-token', response.data.accessToken || 'none');
      localStorage.setItem('refresh-token', String(response.data.refreshToken));
      return (await restApi.getProfile()).data;
    } else {
      return response;
    }
  }

  async getProf() {
    return (await restApi.getProfile()).data;
  }

  async logoutUser() {
    const response = await restApi.logout();
    localStorage.removeItem('access-token');
    localStorage.removeItem('refresh-token');
    return response;
  }
}
const loginService = new LoginService();
export default loginService;
