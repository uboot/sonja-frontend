import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EcosystemReposRepoRoute extends Route {
  @service store;
  
  deactivate(transition) {
    let model = this.modelFor('ecosystem.settings.repos.repo');
    model.rollbackAttributes();
  }
}
