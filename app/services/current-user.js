import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class CurrentUserService extends Service {
  @service session;
  @service store;

  async load() {
    let user = await this.store.findRecord('user', 'me');
    this.set('user', user);
  }
}
