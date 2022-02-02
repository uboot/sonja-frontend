import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EcosystemReposRepoController extends Controller {
  @service session;
  
  @action
  crawlRepo() {
    let repoId = this.model.id;
    
    const headers = new Headers();
    if (this.session.isAuthenticated) {
      headers.append('Authorization', `Bearer ${this.session.data.authenticated.access_token}`);
    }

    fetch(`/api/v1/process_repo/${repoId}`, {
      method: 'GET',
      headers: headers
    });
  }

  @action
  startBuild(model) {
    model.status = 'new';
    model.save();
  }

  @action
  stopBuild(model) {
    model.status = 'stopping';
    model.save();
  }
}
