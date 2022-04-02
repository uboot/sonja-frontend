import Component from '@glimmer/component';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TextDialogComponent extends Component {
  @tracked open = false;
  model = {};

  get content() {
    return this.args.model[this.args.property];
  }

  set content(value) {
    this.args.model[this.args.property] = value;
  }

  @action
  showDialog() {
    if (this.content) {
      set(this.model, "decoded", atob(this.content));
    } else {
      set(this.model, "decoded", '');
    }
    this.open = true;
  }

  @action
  closeDialog() {
    this.open = false;
    return false;
  }

  @action
  submitDialog() {
    var updatedContent = btoa(this.model.decoded);
    this.content = updatedContent;
    this.open = false;
  }
}
