import { store } from 'quasar/wrappers';
import Vuex from 'vuex';
import job from './job-module';
import user from './user-module';
import { JobStateInterface } from './job-module/state';
import { UserStateInterface } from './user-module/state';
import auth from './auth';
import { IAuthState } from './auth/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
 
  IJob: JobStateInterface;
  IUser: UserStateInterface;
  auth: IAuthState;
}

export default store(function({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store<StateInterface>({
    modules: {
      // example
      job,
      user,
      auth
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEBUGGING
  });

  return Store;
});
