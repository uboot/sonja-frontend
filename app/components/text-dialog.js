import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TextDialogComponent extends Component {
  @tracked open = false;
  model = {};

  @action
  showDialog() {
    if (this.args.content) {
      this.model.decoded = atob(this.args.content);
    } else {
      this.model.decoded = '';
    }
    this.open = true;
  }

  @action
  closeDialog() {
    this.open = false;
    return false;
  }

  @action
  submitDialog(model) {
    var content = btoa(model.decoded);
    this.args.onChange(content);
    this.open = false;
  }
}
