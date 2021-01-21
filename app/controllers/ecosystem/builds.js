import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EcosystemBuildsController extends Controller {

  @action
  stopBuild(model) {
    model.status = 'stopping';
    model.save();
  }
  
}
