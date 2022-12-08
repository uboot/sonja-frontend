import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EcosystemReposRepoRoute extends Route {
  @service store;
  @service infinity;
  @service sonjaEvents;

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

    let self = this;
    this.sonjaEvents.addObserver('payload', async () => {
      let data = self.sonjaEvents.payload.data;
      
      if (data.type != "builds")
      {
        return;
      }

      let record = await self.store.findRecord('build', data.id);
      let model = await self.modelFor('ecosystem.repos.repo');
      if (!model.builds.isAny('id', record.id)) {
        self.infinity.pushObjects(model.builds.content, [record]);
      }
    });
    
    return { 
      builds: this.infinity.model('build', dataParams),
      repo: this.store.findRecord('repo', params.repo_id)
    }
  }
}
