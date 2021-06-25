import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class SettingsEditorComponent extends Component {
  settings = [];

  constructor(owner, args) {
    super(owner, args);

    let settings = args.model[args.property];
    settings.forEach(setting => {
      this.settings.push({...setting});
    });
  }

  @action
  saveSettings() {
    this.args.model[this.args.property] = this.settings;
    this.args.onSubmit(this.args.model);
  }

  @action
  addSetting() {
    this.settings.pushObject({});
  }
}
