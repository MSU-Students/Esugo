import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { WorkerStateInterface } from './state';

const getters: GetterTree<WorkerStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
