import { inject as service } from '@ember/service';
import SessionService from 'ember-simple-auth/services/session';

export default class MySessionService extends SessionService {
  @service currentUser;

  async handleAuthentication() {
    await super.handleAuthentication(...arguments);

    try {
      await this.currentUser.load();
    } catch (err) {
      await this.invalidate();
    }
  }
}
