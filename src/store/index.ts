import { store } from 'quasar/wrappers';
import Vuex from 'vuex';
import job from './job-module';
import worker from './worker-module';
import employer from './employer-module';
import jobworker from './jobworker-module';
import jobreport from './jobreport-module';
import { JobStateInterface } from './job-module/state';
import { WorkerStateInterface } from './worker-module/state';
import { EmployerStateInterface } from './employer-module/state';
import { JobworkerStateInterface } from './jobworker-module/state';
import { JobreportStateInterface } from './jobreport-module/state';
import { componentsStateInterface } from './components-module/state';


/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  componentsInterface: componentsStateInterface;
  IJob: JobStateInterface;
  IEmployer: EmployerStateInterface;
  IWorker: WorkerStateInterface;
  IJobworker: JobworkerStateInterface;
  IJobreport: JobreportStateInterface;
}

export default store(function({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store<StateInterface>({
    modules: {
      // example
      job,
      worker,
      employer,
      jobworker,
      jobreport,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEBUGGING
  });

  return Store;
});
