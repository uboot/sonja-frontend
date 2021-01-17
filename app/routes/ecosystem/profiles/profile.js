import Route from '@ember/routing/route';

export default class EcosystemProfilesProfileRoute extends Route {

  async model(params) {
    return this.store.findRecord('profile', params.profile_id)
  }

}
