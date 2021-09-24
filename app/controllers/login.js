import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LoginController extends Controller {
  @service router;
  @service session;

  @action
  async submit(model) {
    let { user, password } = this;
    try {
      await this.session.authenticate('authenticator:api-key', user, password);
    } catch(error) {
      console.log(error);
    }

    if (this.session.isAuthenticated) {
      this.router.transitionTo("index");
    }
  }
}
