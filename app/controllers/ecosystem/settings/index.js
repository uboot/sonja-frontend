import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EcosystemSettingsIndexController extends Controller {
  @action
  async saveModel() {
    await this.model.save();
  }

  @action
  async saveKnownHosts(value) {
    this.model.known_hosts = value;
    await this.model.save();
  }
}
