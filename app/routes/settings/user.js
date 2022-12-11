import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SettingsUserRoute extends Route {
  @service currentUser;

  async model() {
    return this.currentUser.user;
  }
}
