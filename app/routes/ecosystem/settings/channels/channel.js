import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EcosystemSettingsChannelsChannelRoute extends Route {
  @service store;

  deactivate(transition) {
    let model = this.modelFor('ecosystem.settings.channels.channel');
    model.rollbackAttributes();
  }
}
