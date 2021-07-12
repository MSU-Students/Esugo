import jobService from 'src/services/job.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { JobStateInterface } from './state';

const actions: ActionTree<JobStateInterface, StateInterface> = {
  async getAllJobs(context): Promise<any> {
    const res = await jobService.getAll();
    context.commit('getAllJobs', res);
  },

  async getOneJobs(context, id: number): Promise<any> {
    const res = await jobService.getOne(id);
    context.commit('getOneJobs', res);
  },

  async createJobs(context, payload: any): Promise<any> {
    const res = await jobService.create(payload);
    context.commit('createJobs', res);
  },

  async updateJob(context, payload: any): Promise<any> {
    const res = await jobService.update(payload.id, payload.payload);
    context.commit('updateJob', res);
  },

  async deleteJob(context, id: number): Promise<any> {
    const res = await jobService.delete(id);
    context.commit('deleteJob', res);
  }
};

export default actions;
