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

class JobService extends DefaultApi {
  async getAll() {
    const res = await restApi.getJobs();
    console.log(res);
    return res.data;
  }

  async getOne(id: number) {
    const res = await restApi.getJob(id);
    return res.data;
  }

  async create(payload: any) {
    console.log(payload);
    const res = await restApi.addJob(payload);
    return res;
  }

  async update(id: number, payload: any) {
    console.log(payload);
    const res = await restApi.updateJob(id, payload);
    return res;
  }

  async delete(id: number) {
    const res = await restApi.deleteJob(id);
    return res;
  }
}

const jobService = new JobService();
export default jobService;
