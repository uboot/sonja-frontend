import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class UsersUserController extends Controller {
  @action
  async saveModel() {
    try {
      await this.model.save();
    } catch (error) {
      console.warn(error.errors[0]);
    }
  }
}
