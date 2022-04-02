import Route from '@ember/routing/route';

export default class EcosystemSettingsIndexRoute extends Route {
  deactivate(transition) {
    let model = this.modelFor('ecosystem.settings');
    model.rollbackAttributes();
  }
}
