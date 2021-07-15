import { GetterTree } from 'vuex';
import { StateInterface } from 'src/store/index';
import { componentsStateInterface } from './state';

const getters: GetterTree<componentsStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
