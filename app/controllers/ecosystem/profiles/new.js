import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EcosystemProfilesNewController extends Controller {
    @service store;
    profile = {};
    
    @action
    async createProfile(model) {
      let ecosystem = this.model
      let profile = this.store.createRecord('profile', {
        name: model.name,
        ecosystem: ecosystem
      });
      await profile.save();
      this.transitionToRoute("ecosystem.profiles.profile", ecosystem, profile);
    }
}
