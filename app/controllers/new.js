import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NewController extends Controller {
  @service store;
  ecosystem = {};

  @action
  async createEcosystem(model) {
    let ecosystem = this.store.createRecord('ecosystem', {
      name: model.name,
    });
    await ecosystem.save();
    this.transitionToRoute("ecosystem", ecosystem);
  }
  
}