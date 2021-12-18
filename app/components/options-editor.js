import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class OptionsEditorComponent extends Component {
  options = [];

  constructor(owner, args) {
    super(owner, args);

    let options = args.model[args.property];
    options.forEach((option) => {
      this.options.push({ ...option });
    });
  }

  @action
  save() {
    this.args.model[this.args.property] = this.options;
    this.args.onSubmit(this.args.model);
  }

  @action
  add() {
    this.options.pushObject({});
  }
}
