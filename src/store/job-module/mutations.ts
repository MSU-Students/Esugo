import { MutationTree } from 'vuex';
import { JobStateInterface } from './state';

const mutation: MutationTree<JobStateInterface> = {
  getAllJob(state, payload: any) {
    state.jobs = [];
    state.jobs.push(...payload);
  },

  getOneJob(state, payload) {
    state.jobs.push(payload);
  },

  createJob(state, payload) {
    state.jobs.push(payload);
  },

  updateJob(state, payload) {
    state.jobs.push(payload);
  },

  deleteJob(state, payload) {
    state.jobs.push(payload);
  }
};

export default mutation;
