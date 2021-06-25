import { A } from '@ember/array';
import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EcosystemSettingsProfilesNewController extends Controller {
    
    @action
    async saveModel() {
      await this.model.save();
    }
    
}
