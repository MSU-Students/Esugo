import jobService from 'src/services/job.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { JobStateInterface } from './state';

const actions: ActionTree<JobStateInterface, StateInterface> = {
  async getAllJob(context): Promise<any> {
    const res = await jobService.getAll();
    console.log(res)
    context.commit('getAllJob', res);
  },

  async getOneJob(context, id: number): Promise<any> {
    const res = await jobService.getOne(id);
    context.commit('getOneJob', res);
  },

  async createJob(context, payload: any): Promise<any> {
    const res = await jobService.create(payload);
    context.commit('createJob', res);
  },

  async updateJob(context, payload: any): Promise<any> {
    console.log(payload)
    await jobService.update(payload.id, payload);
    await context.dispatch('getAllJob');
  },

  async deleteJob(context, id: number): Promise<any> {
    const res = await jobService.delete(id);
    context.commit('deleteJob', res);
  }
};

export default actions;