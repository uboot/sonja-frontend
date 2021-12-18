import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TitleEditorComponent extends Component
{
  @tracked isEditing = false;

  @action
  edit() {
    this.isEditing = true;
    this.backup = this.args.model[this.args.property];
  }

  @action
  async cancel() {
    this.args.model[this.args.property] = this.backup;
    this.isEditing = false;
  }

  @action
  async save() {
    this.isEditing = false;
    await this.args.onSave();
  }
}
