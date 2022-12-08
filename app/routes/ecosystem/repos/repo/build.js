import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ENV from 'sonja/config/environment';

export default class EcosystemReposRepoBuildRoute extends Route {
  @service store;
  @service sonjaEvents;
}
