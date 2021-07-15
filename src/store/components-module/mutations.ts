import { MutationTree } from 'vuex';
import { componentsStateInterface } from './state';

const mutation: MutationTree<componentsStateInterface> = {
  leftDrawer(state, opened) {
    state.leftDrawerState = opened;
  },
  showAccountDialog(state, payload: boolean) {
    state.showPendingJob = payload;
  },
  showBulletinDialog(state, payload: boolean) {
    console.log(payload)
    state.showPendingAcct = payload;
  },
  showClearanceDialog(state, payload: boolean) {
    state.showReportedJob = payload;
  },
  showAttendaceDialog(state, payload: boolean) {
    state.showReportetAcct = payload;
  },
};

export default mutation;
