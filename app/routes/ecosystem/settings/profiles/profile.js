import Route from '@ember/routing/route';

export default class EcosystemSettingsProfilesProfileRoute extends Route {

  model(params) {
    return this.store.findRecord('profile', params.profile_id)
  }

  deactivate(transition) {
      let model = this.modelFor('ecosystem.settings.profiles.profile');
      
      console.log(model.changedAttributes());
      model.rollbackAttributes();
  }

}
