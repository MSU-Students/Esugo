import { DefaultApi } from './rest-api/api';
import { Configuration, ApplicationDto } from './rest-api';

import { restApi } from './rest-api.service';

class ApplicationService extends DefaultApi {
  async getAll(): Promise<ApplicationDto> {
    const res = await restApi.getApplications();
    return res.data;
  }

  async getOne(id: number): Promise<ApplicationDto> {
    const res = await restApi.getApplication(id);
    return res.data;
  }

  async create(payload: any): Promise<ApplicationDto> {
    const res = await restApi.addApplication(payload);
    return res.data;
  }

  async update(id: number, payload: any) {
    const res = await restApi.updateApplication(id, payload);
    return res;
  }

  async delete(id: number) {
    const res = await restApi.deleteApplication(id);
    return res;
  }
}

const applicationService = new ApplicationService();
export default applicationService;
