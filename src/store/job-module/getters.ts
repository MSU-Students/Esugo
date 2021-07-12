import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { JobStateInterface } from './state';

const getters: GetterTree<JobStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
