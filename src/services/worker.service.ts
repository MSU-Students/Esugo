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

class WorkerService extends DefaultApi {
  async getAll() {
    const res = await restApi.getWorkers();
    return res;
  }

  async getOne(id: number) {
    const res = await restApi.getWorker(id);
    return res;
  }

  async create(payload: any) {
    const res = await restApi.addWorker(payload);
    return res;
  }

  async update(id: number, payload: any) {
    const res = await restApi.updateWorker(id, payload);
    return res;
  }

  async delete(id: number) {
    const res = await restApi.deleteWorker(id);
    return res;
  }
}

const workerService = new WorkerService();
export default workerService;
