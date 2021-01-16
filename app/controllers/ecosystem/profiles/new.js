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
    async createProfile(model) {
      let ecosystem = this.model
      let profile = this.store.createRecord('profile', {
        name: model.name,
        container: model.container,
        settings: model.settings,
        ecosystem: ecosystem
      });
      await profile.save();
      this.transitionToRoute("ecosystem.ecosystem.profiles", ecosystem);
    }

    @action
    addSetting() {
      this.profile.settings.pushObject({});
    }
}
