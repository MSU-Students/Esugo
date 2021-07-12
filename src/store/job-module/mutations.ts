import { MutationTree } from 'vuex';
import { JobStateInterface } from './state';

const mutation: MutationTree<JobStateInterface> = {
  getAllJobs(state, payload: any) {
    state.jobs.push(...payload);
  },

  getOneJobs(state, payload) {
    state.jobs.push(payload);
  },

  createJobs(state, payload) {
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
