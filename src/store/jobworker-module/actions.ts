import jobworkerService from 'src/services/job.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { JobworkerStateInterface } from './state';

const actions: ActionTree<JobworkerStateInterface, StateInterface> = {
  async getAllJobworker(context): Promise<any> {
    const res = await jobworkerService.getAll();
    context.commit('getAllJobworker', res);
  },

  async getOneJobworker(context, id: number): Promise<any> {
    const res = await jobworkerService.getOne(id);
    context.commit('getOneJobworker', res);
  },

  async createJobworker(context, payload: any): Promise<any> {
    const res = await jobworkerService.create(payload);
    context.commit('createJobworker', res);
  },

  async updateJobworker(context, payload: any): Promise<any> {
    const res = await jobworkerService.update(payload.id, payload.payload);
    context.commit('updateJobworker', res);
  },

  async deleteJobworker(context, id: number): Promise<any> {
    const res = await jobworkerService.delete(id);
    context.commit('deleteJobworker', res);
  }
};

export default actions;
