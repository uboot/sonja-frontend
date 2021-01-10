import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NewController extends Controller {
  @service store;
  newEcosystem = {};

  @action
  async createEcosystem(model) {
    this.open = false;
    let ecosystem = this.store.createRecord('ecosystem', {
      name: model.name,
    });
    await ecosystem.save();
    this.transitionToRoute("ecosystem", ecosystem);
  }
  
}