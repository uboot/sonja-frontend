import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'

export default class EcosystemSettingsChannelsNewController extends Controller {
  queryParams = ['copyFrom'];

  @service store;
  @service router;

  @tracked editName = true;

  init() {
    super.init(...arguments);
    this.addObserver("model", async () => {
      if (this.copyFrom) {
        let source = await this.store.findRecord("channel", this.copyFrom);
        this.model.name = source.name; 
        this.model.conan_channel = source.conan_channel;
        this.model.branch = source.branch;
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
    this.router.transitionTo('ecosystem.settings.channels', this.model.ecosystem);
  }

  @action
  async cancel() {
    this.router.transitionTo('ecosystem.settings.channels', this.model.ecosystem);
  }
}
