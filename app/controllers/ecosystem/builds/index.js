import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EcosystemBuildsController extends Controller {
  @action
  async startBuild(model) {
    model.status = 'new';
    await model.save();
    let log = await model.log;
    log.unloadRecord();
  }

  @action
  stopBuild(model) {
    model.status = 'stopping';
    model.save();
  }
}
