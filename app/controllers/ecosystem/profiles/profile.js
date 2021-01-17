import { A } from '@ember/array';
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class EcosystemProfilesNewController extends Controller {
    @service store;
    @tracked profile = {
      settings: A([])
    };
    
    @action
    async saveModel(model) {
      await this.model.save();
    }

    @action
    addSetting() {
      this.model.settings.pushObject({});
    }
}
