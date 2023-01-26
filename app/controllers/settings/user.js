import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SettingsUserController extends Controller {
  @service currentUser

  @action
  async save() {
    try {
      await this.currentUser.user.save();
    } catch (error) {
      console.warn(error.errors[0]);
    }
  }
}
