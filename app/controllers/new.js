import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NewController extends Controller {
  @service router;
  @service store;
  ecosystem = {};

  @action
  async createEcosystem(model) {
    let ecosystem = this.store.createRecord('ecosystem', {
      name: model.name,
      credentials: [],
    });
    await ecosystem.save();
    this.router.transitionTo('ecosystem.settings', ecosystem);
  }
}
