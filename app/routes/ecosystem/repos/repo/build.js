import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ENV from 'sonja/config/environment';

export default class EcosystemReposRepoBuildRoute extends Route {
  @service store;

  activate() {
    let buildId = this.paramsFor('ecosystem.repos.repo.build').build_id;
    this.eventSource = new EventSource(`/${ENV.apiNamespace}/event/build/${buildId}/run`);
    let self = this;
    this.eventSource.addEventListener('update', async function(e) {
      let data = JSON.parse(e.data);
      self.store.pushPayload(data);
    });
  }

  deactivate() {
    this.eventSource?.close();
  }
}
