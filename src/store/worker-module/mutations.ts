import { MutationTree } from 'vuex';
import { WorkerStateInterface } from './state';

const mutation: MutationTree<WorkerStateInterface> = {
  getAllWorker(state, payload: any) {
    state.workers.push(...payload);
  },

  getOneWorker(state, payload) {
    state.workers.push(payload);
  },

  createWorker(state, payload) {
    state.workers.push(payload);
  },

  updateWorker(state, payload) {
    state.workers.push(payload);
  },

  deleteWorker(state, payload) {
    state.workers.push(payload);
  }
};

export default mutation;
