import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class UsersNewController extends Controller {
    @service router;
    @service store;
    
    @action
    async createUser(model) {
      let user = this.store.createRecord('user', {
        user_name: model.user_name,
      });
      await user.save();
      this.router.transitionTo("users.user", user);
    }
}
