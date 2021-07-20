import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { EmployerStateInterface } from './state';

const getters: GetterTree<EmployerStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
