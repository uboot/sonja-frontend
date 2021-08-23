import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EcosystemSettingsProfilesProfileController extends Controller {
    platforms = [
      'linux',
      'windows'
    ]



    @action
    async saveModel() {
      await this.model.save();
    }
    
}
