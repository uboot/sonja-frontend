import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class UsersUserController extends Controller {
  @service router;
  
  @action
  async save() {
    try {
      await this.model.save();
    } catch (error) {
      console.warn(error.errors[0]);
    }
    this.router.transitionTo('users');
  }

  @action
  cancel() {
    this.router.transitionTo('users');
  }
}
