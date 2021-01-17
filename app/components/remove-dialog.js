import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class RemoveDialogComponent extends Component {
  @tracked open = false;

  @action
  showDialog() {
    this.open = true;
  }

  @action
  closeDialog() {
    this.open = false;
    return false;
  }

  @action
  submitDialog(model) {
    this.args.item.destroyRecord();
    this.open = false;
  }

}
