import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EcosystemController extends Controller {

  @action
  saveModel() {
    this.model.save();
  }

  @action
  saveKnownHosts(value) {
    this.model.known_hosts = value;
    this.model.save();
  }
  
}
