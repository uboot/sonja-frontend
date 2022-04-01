import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EcosystemSettingsReposNewRoute extends Route {
  @service store;

  newModel = null;

  model() {
    let ecosystem = this.modelFor('ecosystem');
    this.newModel = this.store.createRecord('repo', {
      name: '',
      ecosystem: ecosystem,
      exclude: [],
      options: [],
    });

    return this.newModel
  }

  deactivate() {
    this.newModel.rollbackAttributes();
  }
}
