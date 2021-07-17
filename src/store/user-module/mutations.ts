import { MutationTree } from 'vuex';
import { UserStateInterface } from './state';

const mutation: MutationTree<UserStateInterface> = {
  getAllUser(state, payload: any) {
    state.users = [];
    state.users.push(...payload);
  },

  getOneUser(state, payload) {
    state.users.push(payload);
  },

  createUser(state, payload) {
    state.users.push(payload);
  },
  
  updateUser(state, payload) {
    state.users.push(payload);
  },

  deleteUser(state, payload) {
    state.users.push(payload);
  }
};

export default mutation;
