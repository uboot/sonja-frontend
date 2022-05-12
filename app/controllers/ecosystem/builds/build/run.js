import Controller from '@ember/controller';

export default class EcosystemBuildsBuildIndexController extends Controller {
  get sortedLogLines() {
    return this.model.logLines.uniqBy('id').sortBy('number');
  }
}
