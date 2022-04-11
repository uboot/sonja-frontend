import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EcosystemBuildsController extends Controller {
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
