import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CredentialEditorComponent extends Component {
  @tracked isAddingNewItem = false;
  @tracked newItem = {};

  constructor(owner, args) {
    super(owner, args);

    this.items = args.model[args.property];
  }

  @action
  async removeItem(item) {
    this.items.removeObject(item);
    await this.save();
  }

  @action
  async save() {
    this.args.model[this.args.property] = this.items;
    await this.args.onSubmit();
  }

  @action
  async saveNewItem() {
    this.items.pushObject(this.newItem);
    await this.save();
    this.isAddingNewItem = false;
  }

  @action
  cancelNewItem() {
    this.isAddingNewItem = false;
  }

  @action
  new() {
    this.newItem = {};
    this.isAddingNewItem = true;
  }
}
