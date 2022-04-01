import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EcosystemSettingsChannelsNewRoute extends Route {
  @service store;

  newModel = null;

  model() {
    let ecosystem = this.modelFor('ecosystem');
    this.newModel = this.store.createRecord('channel', {
      name: '',
      ecosystem: ecosystem
    });

    return this.newModel
  }

  deactivate() {
    this.newModel.rollbackAttributes();
  }
}

