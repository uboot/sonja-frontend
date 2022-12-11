import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'

export default class CurrentConfigurationService extends Service {
  @service currentUser;
  @service session;
  @service store;

  @tracked configuration;

  async load() {
    if (this.session.isAuthenticated &&
      this.currentUser.user.getPermission('admin')) {
      this.configuration = await this.store.queryRecord('configuration', { current: true });
    } else {
      this.configuration = null;
    }
  }
}
