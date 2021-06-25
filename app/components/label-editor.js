import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class LabelEditorComponent extends Component {
  items = [];

  constructor(owner, args) {
    super(owner, args);

    let items = args.model[args.property];
    items.forEach(item => {
      this.items.push({...item});
    });
  }

  @action
  saveItems() {
    this.args.model[this.args.property] = this.items;
    this.args.onSubmit(this.args.model);
  }

  @action
  addItem() {
    this.items.pushObject({});
  }
}
