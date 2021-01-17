import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class SettingsEditorComponent extends Component {
    @action
    saveSettings() {
      this.args.onSaveSettings();
    }

    @action
    addSetting() {
      this.args.settings.pushObject({});
    }
}
