import Controller from '@ember/controller';

export default class EcosystemBuildsBuildIndexController extends Controller {
  get runs() {
    return this.model.runs.sortBy('started').reverse();
  }
}
