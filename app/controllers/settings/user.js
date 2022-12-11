import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class SettingsUserController extends Controller {
  @action
  async save() {
    try {
      await this.currentUser.user.save();
    } catch (error) {
      console.warn(error.errors[0]);
    }
  }
}
