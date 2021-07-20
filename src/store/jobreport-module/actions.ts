import jobreportService from 'src/services/job.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { JobreportStateInterface } from './state';

const actions: ActionTree<JobreportStateInterface, StateInterface> = {
  async getAllJobreport(context): Promise<any> {
    const res = await jobreportService.getAll();
    context.commit('getAllJobreport', res);
  },

  async getOneJobreport(context, id: number): Promise<any> {
    const res = await jobreportService.getOne(id);
    context.commit('getOneJobreport', res);
  },

  async createJobreport(context, payload: any): Promise<any> {
    const res = await jobreportService.create(payload);
    context.commit('createJobreport', res);
  },

  async updateJobreport(context, payload: any): Promise<any> {
    const res = await jobreportService.update(payload.id, payload.payload);
    context.commit('updateJobreport', res);
  },

  async deleteJobreport(context, id: number): Promise<any> {
    const res = await jobreportService.delete(id);
    context.commit('deleteJobreport', res);
  }
};

export default actions;
