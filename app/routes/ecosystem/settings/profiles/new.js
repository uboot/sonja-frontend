import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EcosystemSettingsProfilesNewRoute extends Route {
  @service store;

  newModel = null;

  model() {
    let ecosystem = this.modelFor('ecosystem');
    this.newModel = this.store.createRecord('profile', {
      name: '',
      ecosystem: ecosystem,
      labels: [],
      platform: 'Linux'
    });

    return this.newModel
  }

  deactivate() {
    this.newModel.rollbackAttributes();
  }
}

