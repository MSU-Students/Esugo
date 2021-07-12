import { MutationTree } from 'vuex';
import { JobworkerStateInterface } from './state';

const mutation: MutationTree<JobworkerStateInterface> = {
  getAllJobworker(state, payload: any) {
    state.jobworkers.push(...payload);
  },

  getOneJobworker(state, payload) {
    state.jobworkers.push(payload);
  },

  createJobworker(state, payload) {
    state.jobworkers.push(payload);
  },

  updateJobworker(state, payload) {
    state.jobworkers.push(payload);
  },

  deleteJobworker(state, payload) {
    state.jobworkers.push(payload);
  }
};

export default mutation;
