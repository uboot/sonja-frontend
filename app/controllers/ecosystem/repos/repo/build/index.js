import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EcosystemReposRepoBuildIndexController extends Controller {
  get runs() {
    return this.model.runs.sortBy('started').reverse();
  }
  
  @action
  startBuild() {
    this.model.status = 'new';
    this.model.save();
  }

  @action
  stopBuild() {
    this.model.status = 'stopping';
    this.model.save();
  }
}
