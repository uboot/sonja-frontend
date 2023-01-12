import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EcosystemReposRepoIndexRoute extends Route {
  @service infinity;
  @service sonjaEvents;
  @service store;

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

    let self = this;
    this.sonjaEvents.addObserver('payload', async () => {
      let payload = self.sonjaEvents.payload;         
      if (payload.type != "builds") {
        return;
      }

      let record = await self.store.findRecord('build', payload.id, { backgroundReload: false });
      let model = self.modelFor('ecosystem.repos.repo.index');

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
      repo: this.modelFor('ecosystem.repos.repo')
    }
  }
}
