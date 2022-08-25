import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EcosystemReposRepoBuildController extends Controller {
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
