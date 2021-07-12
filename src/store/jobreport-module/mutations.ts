import { MutationTree } from 'vuex';
import { JobreportStateInterface } from './state';

const mutation: MutationTree<JobreportStateInterface> = {
  getAllJobreport(state, payload: any) {
    state.jobreports.push(...payload);
  },

  getOneJobreport(state, payload) {
    state.jobreports.push(payload);
  },

  createJobreport(state, payload) {
    state.jobreports.push(payload);
  },

  updateJobreport(state, payload) {
    state.jobreports.push(payload);
  },

  deleteJobreport(state, payload) {
    state.jobreports.push(payload);
  }
};

export default mutation;
