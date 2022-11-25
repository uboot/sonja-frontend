import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ENV from 'sonja/config/environment';

export default class EcosystemReposRepoRoute extends Route {
  @service store;
  @service infinity;

  model(params) {
    let ecosystem = this.modelFor('ecosystem');
    let dataParams = {
      perPage: 10,
      ecosystem_id: ecosystem.id,
      repo_id: params.repo_id
    }

    if (params.channel) {
      dataParams.channel_id = params.channel;
    }
    
    if (params.profile) {
      dataParams.profile_id = params.profile;
    }
    
    return { 
      builds: this.infinity.model('build', dataParams),
      repo: this.store.findRecord('repo', params.repo_id)
    }
  }

  activate() {
    let repoId = this.paramsFor('ecosystem.repos.repo').repo_id;
    this.eventSource = new EventSource(`/${ENV.apiNamespace}/event/repo/${repoId}/build`);
    let self = this;
    this.eventSource.addEventListener('update', async function(e) {
      let data = JSON.parse(e.data);
      self.store.pushPayload(data);
      let record = await self.store.findRecord('build', data.data.id);
      let model = await self.modelFor('ecosystem.repos.repo');
      if (!model.builds.isAny('id', record.id)){
        self.infinity.pushObjects(model.builds.content, [record]);
      }
    });
  }

  deactivate() {
    this.eventSource?.close();
  }
}
