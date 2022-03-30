import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class LabelEditorComponent extends Component {
  items = [];
  @tracked isEditing = false;

  constructor(owner, args) {
    super(owner, args);

    let items = args.model[args.property];
    items.forEach((item) => {
      this.items.push({ ...item });
    });
  }

  @action
  edit() {
    this.isEditing = true;
  }

  @action
  save() {
    this.args.model[this.args.property] = this.items;
  }

  @action
  addItem() {
    this.items.pushObject({});
  }
}
