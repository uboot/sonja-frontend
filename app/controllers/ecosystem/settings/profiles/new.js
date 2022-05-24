import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'

export default class EcosystemSettingsProfilesNewController extends Controller {
  queryParams = ['copyFrom'];

  @service store;
  @service router;

  @tracked editName = true;

  init() {
    super.init(...arguments);
    this.addObserver("model", async () => {
      if (this.copyFrom) {
        let source = await this.store.findRecord("profile", this.copyFrom);
        this.model.name = source.name; 
        this.model.container = source.container;
        this.model.platform = source.platform;
        this.model.conan_profile = source.conan_profile;
        this.model.labels = source.labels;
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
    this.router.transitionTo('ecosystem.settings.profiles', this.model.ecosystem);
  }

  @action
  async cancel() {
    this.router.transitionTo('ecosystem.settings.profiles', this.model.ecosystem);
  }
}
