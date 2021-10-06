import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EcosystemRoute extends Route {
  @service session;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }

  model(params) {
    return this.store.findRecord('ecosystem', params.ecosystem_id);
  }
}
