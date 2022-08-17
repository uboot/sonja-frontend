import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EcosystemReposRepoIndexController extends Controller {
  get sortedBuilds() {
    return this.model.sortBy('created').uniqBy('id').reverse();
  }

  @action
  startBuild(model) {
    model.status = 'new';
    model.save();
  }

  @action
  stopBuild(model) {
    model.status = 'stopping';
    model.save();
  }
}
