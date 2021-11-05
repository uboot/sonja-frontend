import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class CredentialEditorItemComponent extends Component {
  item = {};

  constructor(owner, args) {
    super(owner, args);
    Object.assign(this.item, this.args.item);
  }

  @tracked isEditing = false;

  @action
  cancel() {
    this.isEditing = false;
    Object.assign(this.item, this.args.item);
  }

  @action
  edit() {
    this.isEditing = true;
  }

  @action
  remove() {
    if (this.args.onRemoveItem) {
      this.args.onRemoveItem();
    }
  }

  @action
  save() {
    this.isEditing = false;
    Object.assign(this.args.item, this.item);
    if (this.args.onSaveItem) {
      this.args.onSaveItem();
    }
  }
}
