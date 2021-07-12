import employerService from 'src/services/employer.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { EmployerStateInterface } from './state';

const actions: ActionTree<EmployerStateInterface, StateInterface> = {
  async getAllemployer(context): Promise<any> {
    const res = await employerService.getAll();
    context.commit('getAllemployer', res);
  },

  async getOneemployer(context, id: number): Promise<any> {
    const res = await employerService.getOne(id);
    context.commit('getOneemployer', res);
  },

  async createemployer(context, payload: any): Promise<any> {
    const res = await employerService.create(payload);
    context.commit('createemployer', res);
  },

  async updateemployer(context, payload: any): Promise<any> {
    const res = await employerService.update(payload.id, payload.payload);
    context.commit('updateemployer', res);
  },

  async deleteemployer(context, id: number): Promise<any> {
    const res = await employerService.delete(id);
    context.commit('deleteemployer', res);
  }
};

export default actions;
