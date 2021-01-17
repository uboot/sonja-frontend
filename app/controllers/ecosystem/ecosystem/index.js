import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EcosystemIndexController extends Controller {

  @action
  async saveModel() {
    await this.model.save();
  }

  @action
  saveKnownHosts(value) {
    this.model.known_hosts = value;
    this.model.save();
  }
  
}
