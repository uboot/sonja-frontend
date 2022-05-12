import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EcosystemBuildsController extends Controller {
  get sortedBuilds() {
    return this.model.sortBy('created').uniqBy('id').reverse();
  }

  @action
  async startBuild(model) {
    model.status = 'new';
    await model.save();
  }

  @action
  async stopBuild(model) {
    model.status = 'stopping';
    await model.save();
  }
}
