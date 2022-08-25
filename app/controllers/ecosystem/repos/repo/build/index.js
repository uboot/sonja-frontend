import Controller from '@ember/controller';

export default class EcosystemReposRepoBuildIndexController extends Controller {
  get runs() {
    return this.model.runs.sortBy('started').reverse();
  }
}
