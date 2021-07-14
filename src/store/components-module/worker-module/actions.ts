import { ActionTree } from 'vuex';
import { StateInterface } from 'src/store/index';
import { componentsStateInterface } from './state';

const actions: ActionTree<componentsStateInterface, StateInterface> = {
  leftDrawer(context, opened) {
    context.commit('leftDrawer', opened)
  },
  showPendingJob(context, payload: boolean) {
    context.commit('showPendingJob', payload);
  },
  showPendingAcct(context, payload: boolean) {
    context.commit('showPendingAcct', payload);
  },
  showReportedJob(context, payload: boolean) {
    context.commit('showReportedJob', payload);
  },
  showReportedAcct(context, payload: boolean) {
    context.commit('showReportedAcct', payload);
  },
};

export default actions;