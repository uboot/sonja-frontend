import Route from '@ember/routing/route';

export default class EcosystemReposRepoRoute extends Route {

    model(params) {
      return this.store.findRecord('repo', params.repo_id)
    }

    deactivate(transition) {
        let model = this.modelFor('ecosystem.settings.repos.repo');
        model.rollbackAttributes();
    }

}
