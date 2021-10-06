import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EcosystemSettingsProfilesNewController extends Controller {
  @service router;
  @service store;

  @action
  async createProfile(model) {
    let ecosystem = this.model;
    let profile = this.store.createRecord('profile', {
      name: model.name,
      ecosystem: ecosystem,
      labels: [],
    });
    await profile.save();
    this.router.transitionTo(
      'ecosystem.settings.profiles.profile',
      ecosystem,
      profile
    );
  }
}
