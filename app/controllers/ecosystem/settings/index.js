import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EcosystemSettingsIndexController extends Controller {
  @action
  async save() {
    await this.model.save();
  }
}
