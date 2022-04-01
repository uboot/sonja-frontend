import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'

export default class UsersNewController extends Controller {
  @service store;
  @service router;

  @tracked editName = true;

  init() {
    super.init(...arguments);
    this.addObserver("model", async () => {
      this.editName = true;
    });
  }

  @action
  create() {
    this.editName = false;
  }

  @action
  async save() {
    await this.model.save();
    this.router.transitionTo('users');
  }

  @action
  async cancel() {
    this.router.transitionTo('users');
  }
}
