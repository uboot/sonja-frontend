import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

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
    this.args.model.settings = this.settings;
    this.args.onSubmit(this.args.model);
  }

  @action
  addSetting() {
    this.settings.pushObject({});
  }
}
