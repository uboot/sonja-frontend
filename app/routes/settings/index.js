import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SettingsConfigurationRoute extends Route {
  @service currentConfiguration;

  async model() {
    await this.currentConfiguration.load();
    return this.currentConfiguration.configuration;
  }
}
