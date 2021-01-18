import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class EcosystemChannelsChannelController extends Controller {
    @service store;
    @tracked channel = {
    };
    
    @action
    async saveModel(model) {
      await this.model.save();
    }
}
