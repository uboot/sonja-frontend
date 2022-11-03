import Route from '@ember/routing/route';

export default class EcosystemReposRepoIndexRoute extends Route {
  eventSource = null;
  queryParams = {
    channel: {
      refreshModel: true
    },
    profile: {
      refreshModel: true
    }
  };
}
