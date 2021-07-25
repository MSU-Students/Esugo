import { MutationTree } from 'vuex';
import { UserStateInterface } from './state';

const mutation: MutationTree<UserStateInterface> = {
  getAllUser(state, payload: any) {
    state.users = [];
    state.users.push(...payload);
  },

  getOneUser(state, payload) {
    state.user = payload;
  },

  createUser(state, payload) {
    state.users.push(payload);
  },

  updateUser(state, payload) {
    state.users.push(payload);
  },

  deleteUser(state, payload) {
    state.users.push(payload);
  },

  getProfile(state, payload) {
    state.user = payload;
  }
};

export default mutation;
