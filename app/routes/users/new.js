import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UsersNewRoute extends Route {
  @service store;

  newModel = null;

  model() {
    this.newModel = this.store.createRecord('user', {});

    return this.newModel
  }

  deactivate() {
    this.newModel.rollbackAttributes();
  }
}