import Controller from '@ember/controller';

export default class EcosystemReposRepoIndexController extends Controller {
  get sortedBuilds() {
    return this.model.sortBy('created').uniqBy('id').reverse();
  }
}
