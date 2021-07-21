import workerService from 'src/services/worker.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { WorkerStateInterface } from './state';

const actions: ActionTree<WorkerStateInterface, StateInterface> = {
  async getAllWorker(context): Promise<any> {
    const res = await workerService.getAll();
    context.commit('getAllWorker', res);
  },

  async getOneWorker(context, id: number): Promise<any> {
    const res = await workerService.getOne(id);
    context.commit('getOneWorker', res);
  },

  async createWorker(context, payload: any): Promise<any> {
    const res = await workerService.create(payload);
    context.commit('createWorker', res);
  },

  async updateWorker(context, payload: any): Promise<any> {
    const res = await workerService.update(payload.id, payload.payload);
    context.commit('updateWorker', res);
  },

  async deleteWorker(context, id: number): Promise<any> {
    const res = await workerService.delete(id);
    context.commit('deleteWorker', res);
  }
};

export default actions;
