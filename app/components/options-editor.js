import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class OptionsEditorComponent extends Component {
  options = [];
  @tracked isEditing = false;

  constructor(owner, args) {
    super(owner, args);

    let options = args.model[args.property];
    options.forEach((option) => {
      this.options.push({ ...option });
    });
  }

  @action
  edit() {
    this.isEditing = true;
  }

  @action
  save() {
    this.args.model[this.args.property] = this.options.filter((option) => {
      return !!option.key;
    });
    this.isEditing = false;
  }

  @action
  add() {
    this.options.pushObject({});
  }
}
