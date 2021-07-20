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

class JobworkerService extends DefaultApi {
  async getAll() {
    const res = await restApi.getJobworkers();
    return res;
  }

  async getOne(id: number) {
    const res = await restApi.getJobworker(id);
    return res;
  }

  async create(payload: any) {
    const res = await restApi.addJobworker(payload);
    return res;
  }

  async update(id: number, payload: any) {
    const res = await restApi.updateJobworker(id, payload);
    return res;
  }

  async delete(id: number) {
    const res = await restApi.deleteJobworker(id);
    return res;
  }
}

const jobworkerService = new JobworkerService();
export default jobworkerService;
