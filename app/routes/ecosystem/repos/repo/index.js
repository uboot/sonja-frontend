import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ENV from 'sonja/config/environment';

export default class EcosystemReposRepoIndexRoute extends Route {
  @service store;
  @service infinity;
  eventSource = null;
  queryParams = {
    channel: {
      refreshModel: true
    },
    profile: {
      refreshModel: true
    }
  };

  model(params) {
    let ecosystem = this.modelFor('ecosystem');
    let repo = this.modelFor('ecosystem.repos.repo');
    let dataParams = {
      perPage: 10,
      ecosystem_id: ecosystem.id,
      repo_id: repo.id
    }

    if (params.channel) {
      dataParams.channel_id = params.channel;
    }
    
    if (params.profile) {
      dataParams.profile_id = params.profile;
    }
    
    return { 
      builds: this.infinity.model('build', dataParams),
      repo
    }
  }

  activate() {
    let ecosystemId = this.paramsFor('ecosystem').ecosystem_id;
    this.eventSource = new EventSource(`/${ENV.apiNamespace}/event/ecosystem/${ecosystemId}/build`);
    let self = this;
    this.eventSource.addEventListener('update', async function(e) {
      let data = JSON.parse(e.data);
      self.store.pushPayload(data);
      let record = await self.store.findRecord('build', data.data.id);
      let model = await self.modelFor('ecosystem.repos.repo.index');
      if (!model.builds.isAny('id', record.id)){
        self.infinity.pushObjects(model.builds.content, [record]);
      }
    });
  }

  deactivate() {
    this.eventSource?.close();
  }
}
