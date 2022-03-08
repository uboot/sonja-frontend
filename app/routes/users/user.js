import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UsersUserRoute extends Route {
  @service store;
  
  model(params) {
    return this.store.findRecord('user', params.user_id);
  }

  deactivate(transition) {
    let model = this.modelFor('users.user');
    model.rollbackAttributes();
  }
}
