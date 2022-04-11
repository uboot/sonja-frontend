import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ENV from 'sonja/config/environment';

export default class EcosystemBuildsRoute extends Route {
  @service store;
  eventSource = null;

  activate() {
    let ecosystemId = this.paramsFor('ecosystem').ecosystem_id;
    this.eventSource = new EventSource(`/${ENV.apiNamespace}/event/ecosystem/${ecosystemId}/build`);
    let store = this.store;
    this.eventSource.addEventListener('update', function(e) {
      let data = JSON.parse(e.data);
      store.pushPayload(data);
    });
  }

  deactivate() {
    this.eventSource?.close();
  }
}
