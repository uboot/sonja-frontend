import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UsersUserRoute extends Route {
  @service store;

  deactivate(transition) {
    let model = this.modelFor('users.user');
    model.rollbackAttributes();
  }
}
