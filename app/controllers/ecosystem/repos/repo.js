import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EcosystemReposRepoController extends Controller {

  @action
  crawlRepo() {
    let repoId = this.model.id;
    fetch(`/api/v1/process-repo/${repoId}`, {
      method: "GET"
    })
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
