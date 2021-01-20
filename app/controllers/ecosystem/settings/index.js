import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EcosystemSettingsIndexController extends Controller {

  @action
  async saveModel() {
    await this.model.save();
  }

  @action
  saveKnownHosts(value) {
    this.model.known_hosts = value;
    this.model.save();
  }

  @action
  saveSettings(value) {
    this.model.settings = value;
    this.model.save();
  }
  
}
