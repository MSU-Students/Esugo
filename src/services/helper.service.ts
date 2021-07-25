import { Notify } from 'quasar';

class HelperService {
  notify(payload: any) {
    Notify.create({
      type: payload.type,
      message: payload.message,
      caption: payload.caption
    });
  }
}

const helperService = new HelperService();
export default helperService;
