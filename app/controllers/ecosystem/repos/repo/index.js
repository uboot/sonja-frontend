import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class EcosystemReposRepoIndexController extends Controller {
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
}
