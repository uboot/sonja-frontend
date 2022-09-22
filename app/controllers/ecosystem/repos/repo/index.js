import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class EcosystemReposRepoIndexController extends Controller {
  @service session;
  queryParams = ['profile', 'channel'];

  @tracked profile = null;
  @tracked channel = null;

  get sortedBuilds() {
    return this.model.builds.sortBy('created').uniqBy('id').reverse();
  }

  get ecosystem() {
    return this.model.repo.ecosystem;
  }

  @action
  selectChannel(channel) {
    this.channel = channel?.id;
  }

  @action
  selectProfile(profile) {
    this.profile = profile?.id;
  }
  
  @action
  crawlRepo() {
    let repoId = this.model.id;
    
    const headers = new Headers();
    if (this.session.isAuthenticated) {
      headers.append('Authorization', `Bearer ${this.session.data.authenticated.access_token}`);
    }

    fetch(`/${ENV.apiNamespace}/process_repo/${repoId}`, {
      method: 'GET',
      headers: headers
    });
  }
}
