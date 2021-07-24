import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ApplicationStateInterface } from './state';

const getters: GetterTree<ApplicationStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
