import Controller from '@ember/controller';
import { action } from '@ember/object';

const platforms = ['Linux', 'Windows'];

export default class EcosystemSettingsProfilesProfileController extends Controller {
  get platforms() {
    return platforms;
  }

  get platform() {
    if (this.model.platform === 'linux') {
      return platforms[0];
    } else {
      return platforms[1];
    }
  }

  @action
  async saveModel() {
    await this.model.save();
  }

  @action
  setPlatform(platform) {
    this.model.platform = platform.value;
  }
}
