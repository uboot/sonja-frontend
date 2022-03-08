import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SettingsEditorComponent extends Component {
  constructor(...args) {
    super(...args);
    this.model = this.args.user;
  }

  @action
  async save() {
    await this.args.save();
  }
}
