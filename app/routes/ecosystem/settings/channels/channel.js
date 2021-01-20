import Route from '@ember/routing/route';

export default class EcosystemSettingsChannelsChannelRoute extends Route {

    model(params) {
      return this.store.findRecord('channel', params.channel_id)
    }

    deactivate(transition) {
        let model = this.modelFor('ecosystem.settings.channels.channel');
        model.rollbackAttributes();
    }

}
