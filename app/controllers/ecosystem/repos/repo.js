import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EcosystemReposRepoController extends Controller {
    
    @action
    async saveModel(model) {
      await this.model.save();
    }
    
}
