import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { JobworkerStateInterface } from './state';

const getters: GetterTree<JobworkerStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
