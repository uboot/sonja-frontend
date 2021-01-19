import { A } from '@ember/array';
import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EcosystemProfilesNewController extends Controller {
    
    @action
    async saveModel(model) {
      await this.model.save();
    }

    @action
    addSetting() {
      this.model.settings.pushObject({});
    }
    
}
