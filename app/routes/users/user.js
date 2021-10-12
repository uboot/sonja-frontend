import Route from '@ember/routing/route';

export default class UsersUserRoute extends Route {
  model(params) {
    return this.store.findRecord('user', params.user_id);
  }

  deactivate(transition) {
    let model = this.modelFor('users.user');
    model.rollbackAttributes();
  }
}
