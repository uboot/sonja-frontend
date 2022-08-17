import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import ENV from 'sonja/config/environment';

export default class EcosystemReposRepoController extends Controller {
  @service session;
  
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
