import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { JobreportStateInterface } from './state';

const getters: GetterTree<JobreportStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
