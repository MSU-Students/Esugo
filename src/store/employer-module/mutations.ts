import { MutationTree } from 'vuex';
import { EmployerStateInterface } from './state';

const mutation: MutationTree<EmployerStateInterface> = {
  getAllEmployer(state, payload: any) {
    state.employers.push(...payload);
  },

  getOneEmployer(state, payload) {
    state.employers.push(payload);
  },

  createEmployer(state, payload) {
    state.employers.push(payload);
  },

  updateEmployer(state, payload) {
    state.employers.push(payload);
  },

  deleteEmployer(state, payload) {
    state.employers.push(payload);
  }
};

export default mutation;
