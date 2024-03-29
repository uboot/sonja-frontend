import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';
import ENV from 'sonja/config/environment';

export default class EcosystemReposRepoBuildRunRoute extends Route {
  @service store;
  @service infinity;
  eventSource = null;

  model() {
    let params = this.paramsFor('ecosystem.repos.repo.build.run')
    return hash({
      run: this.store.findRecord('run', params.run_id),
      logLines: this.infinity.model('log-line', {
        perPage: 10,
        run_id: params.run_id
      })
    });
  }

  activate() {
    let runId = this.paramsFor('ecosystem.repos.repo.build.run').run_id;
    this.eventSource = new EventSource(`/${ENV.apiNamespace}/event/run/${runId}/log_line`);
    let self = this;
    this.eventSource.addEventListener('update', async function(e) {
      let data = JSON.parse(e.data);
      self.store.pushPayload(data);
      let record = await self.store.findRecord('log-line', data.data.id, { backgroundReload: false });
      let logLines = await self.modelFor('ecosystem.repos.repo.build.run').logLines;
      if (!logLines.isAny('id', record.id)){
        self.infinity.pushObjects(logLines, [record]);
      }
    });
  }

  deactivate() {
    this.eventSource?.close();
  }
}
