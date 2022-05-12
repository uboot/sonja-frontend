import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ENV from 'sonja/config/environment';

export default class EcosystemBuildsRoute extends Route {
  @service store;
  @service infinity;
  eventSource = null;

  model() {
    let ecosystem = this.modelFor('ecosystem');
    return this.infinity.model('build', {
      perPage: 10,
      ecosystem_id: ecosystem.id
    });
  }

  activate() {
    let ecosystemId = this.paramsFor('ecosystem').ecosystem_id;
    this.eventSource = new EventSource(`/${ENV.apiNamespace}/event/ecosystem/${ecosystemId}/build`);
    let self = this;
    this.eventSource.addEventListener('update', async function(e) {
      let data = JSON.parse(e.data);
      self.store.pushPayload(data);
      let record = await self.store.findRecord('build', data.data.id);
      let model = await self.modelFor('ecosystem.builds');
      if (!model.isAny('id', record.id)){
        self.infinity.pushObjects(model, [record]);
      }
    });
  }

  deactivate() {
    this.eventSource?.close();
  }
}
