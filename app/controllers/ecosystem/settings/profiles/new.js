import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EcosystemSettingsProfilesNewController extends Controller {
    @service store;
    
    @action
    async createProfile(model) {
      let ecosystem = this.model
      let profile = this.store.createRecord('profile', {
        name: model.name,
        ecosystem: ecosystem,
        settings: []
      });
      await profile.save();
      this.transitionToRoute("ecosystem.settings.profiles.profile", ecosystem, profile);
    }
    
}
