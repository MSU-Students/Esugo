import workerService from 'src/services/worker.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { WorkerStateInterface } from './state';

const actions: ActionTree<WorkerStateInterface, StateInterface> = {
  async getAllworkers(context): Promise<any> {
    const res = await workerService.getAll();
    context.commit('getAllworkers', res);
  },

  async getOneworkers(context, id: number): Promise<any> {
    const res = await workerService.getOne(id);
    context.commit('getOneworkers', res);
  },

  async createworkers(context, payload: any): Promise<any> {
    const res = await workerService.create(payload);
    context.commit('createworkers', res);
  },

  async updateworker(context, payload: any): Promise<any> {
    const res = await workerService.update(payload.id, payload.payload);
    context.commit('updateworker', res);
  },

  async deleteworker(context, id: number): Promise<any> {
    const res = await workerService.delete(id);
    context.commit('deleteworker', res);
  }
};

export default actions;
