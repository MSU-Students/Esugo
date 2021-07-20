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

class EmployerService extends DefaultApi {
  async getAll() {
    const res = await restApi.getEmployers();
    return res;
  }

  async getOne(id: number) {
    const res = await restApi.getEmployer(id);
    return res;
  }

  async create(payload: any) {
    const res = await restApi.addEmployer(payload);
    return res;
  }

  async update(id: number, payload: any) {
    const res = await restApi.updateEmployer(id, payload);
    return res;
  }

  async delete(id: number) {
    const res = await restApi.deleteEmployer(id);
    return res;
  }
}

const employerService = new EmployerService();
export default employerService;
