import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class EcosystemReposRepoBuildIndexController extends Controller {
  @tracked scrollToBottom = false;
  @tracked keepScrolledToBottom = false;

  init() {
    super.init(...arguments);
    this.addObserver("model.logLines.length", () => {
      if (this.keepScrolledToBottom) {
        this.scrollToBottom = true;
      }
    });

    this.addObserver("keepScrolledToBottom", () => {
      if (this.keepScrolledToBottom) {
        this.scrollToBottom = true;
      }
    });
  }

  get sortedLogLines() {
    return this.model.logLines.uniqBy('id').sortBy('number');
  }
}
