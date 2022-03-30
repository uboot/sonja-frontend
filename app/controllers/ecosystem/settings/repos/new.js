import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'

export default class EcosystemSettingsReposNewController extends Controller {
  queryParams = ['copyFrom'];

  @service store;
  @service router;

  @tracked editName = true;

  init() {
    super.init(...arguments);
    this.addObserver("model", async () => {
      if (this.copyFrom) {
        let source = await this.store.findRecord("repo", this.copyFrom);
        this.model.name = source.name;
        this.model.url = source.url;
        this.model.path = source.path;
        this.model.version = source.version;
        this.model.exclude = source.exclude;
        this.model.options = source.options;
      }

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
    this.router.transitionTo('ecosystem.settings.repos', this.model.ecosystem);
  }

  @action
  async cancel() {
    this.router.transitionTo('ecosystem.settings.repos', this.model.ecosystem);
  }
}
