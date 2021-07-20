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

class JobreportService extends DefaultApi {
  async getAll() {
    const res = await restApi.getJobreports();
    return res;
  }

  async getOne(id: number) {
    const res = await restApi.getJobreport(id);
    return res;
  }

  async create(payload: any) {
    const res = await restApi.addJobreport(payload);
    return res;
  }

  async update(id: number, payload: any) {
    const res = await restApi.updateJobreport(id, payload);
    return res;
  }

  async delete(id: number) {
    const res = await restApi.deleteJobreport(id);
    return res;
  }
}

const jobreportService = new JobreportService();
export default jobreportService;
