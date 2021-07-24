import userService from 'src/services/user.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { UserStateInterface } from './state';

const actions: ActionTree<UserStateInterface, StateInterface> = {
  async getAllUser(context): Promise<any> {
    const res = await userService.getAll();
    context.commit('getAllUser', res);
  },

  async getOneUser(context, id: number): Promise<any> {
    const res = await userService.getOne(id);
    context.commit('getOneUser', res);
  },

  async createUser(context, payload: any): Promise<any> {
    const res = await userService.create(payload);
    context.commit('createUser', res);
  },

  async updateUser(context, payload: any): Promise<any> {
    await userService.update(payload.id, payload);
    await context.dispatch('getAllUser');
  },

  async deleteUser(context, id: number): Promise<any> {
    const res = await userService.delete(id);
    context.commit('deleteUser', res);
  },
  async getProfile(context): Promise<any> {
    const res = await userService.getProfile()
    context.commit('getProfile',res)
  }
};

export default actions;
