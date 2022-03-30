import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EcosystemSettingsReposRepoController extends Controller {
  @service router;

  @action
  cancel() {
    this.router.transitionTo('ecosystem.settings.repos', this.model.ecosystem);
  }

  @action
  async save() {
    await this.model.save();
    this.router.transitionTo('ecosystem.settings.repos', this.model.ecosystem);
  }
}
