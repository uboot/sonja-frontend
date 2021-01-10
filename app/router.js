import EmberRouter from '@ember/routing/router';
import config from 'conan-ci/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('ecosystem', { path: '/:ecosystem_id' });
  this.route('new');
});
