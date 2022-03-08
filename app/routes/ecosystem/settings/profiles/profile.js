import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EcosystemSettingsProfilesProfileRoute extends Route {
  @service store;

  deactivate(transition) {
    let model = this.modelFor('ecosystem.settings.profiles.profile');
    model.rollbackAttributes();
  }
}
