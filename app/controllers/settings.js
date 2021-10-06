import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SettingsController extends Controller {
  @service currentUser;

  @action
  async saveModel() {
    try {
      await this.currentUser.user.save();
    } catch (error) {
      console.warn(error.errors[0]);
    }
  }
}
