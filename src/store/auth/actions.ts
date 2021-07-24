import loginService from 'src/services/login.service';
import { restApi } from 'src/services/rest-api.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { IAuthState } from './state';

const actions: ActionTree<IAuthState, StateInterface> = {
  async login(context, payload: { username: string, password: string, type: string }) {
    const user = await loginService.loginUser(payload.username, payload.password, payload.type);
    context.commit('setCurrentUser', user);
    return user;
  },
  async authUser(context) {
    const user = await restApi.getProfile();
    context.commit('setCurrentUser', user.data);
    return user;
  }
};

export default actions;
