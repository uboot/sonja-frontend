import Route from '@ember/routing/route';

export default class EcosystemRoute extends Route {

  model(params) {
    return this.store.findRecord('ecosystem', params.ecosystem_id)
  }

}
