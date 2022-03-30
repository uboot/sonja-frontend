import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TitleEditorComponent extends Component
{
  @tracked isEditing = false;

  @action
  edit() {
    this.isEditing = true;
  }

  @action
  save() {
    this.isEditing = false;
  }
}
