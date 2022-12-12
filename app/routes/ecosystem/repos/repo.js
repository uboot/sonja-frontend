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
      let payload = self.sonjaEvents.payload;         
      if (payload.type != "builds") {
        return;
      }

      let record = await self.store.findRecord('build', payload.id);
      let model = await self.modelFor('ecosystem.repos.repo');

      if (model.repo.get('id') != record.get('commit.repo.id')) {
        return;
      }

      if (model.builds.isAny('id', record.id)) {
        return;
      }
      
      self.infinity.pushObjects(model.builds.content, [record]);
    });
    
    return { 
      builds: this.infinity.model('build', dataParams),
      repo: this.store.findRecord('repo', params.repo_id)
    }
  }
}
