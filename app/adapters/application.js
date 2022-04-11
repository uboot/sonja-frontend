import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { underscore } from '@ember/string';
import ENV from 'sonja/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  @service session;

  namespace = ENV.apiNamespace;

  @computed('session.data.authenticated.access_token')
  get headers() {
    const headers = {};
    if (this.session.isAuthenticated) {
      headers['Authorization'] = `Bearer ${this.session.data.authenticated.access_token}`;
    }

    return headers;
  }

  pathForType(type) {
    return underscore(type);
  }

  urlForQueryRecord(query) {
    let originalUrl = super.urlForQueryRecord(...arguments);
    if (query.me) {
      delete query.me;
      return `${originalUrl}/me`;
    }

    return originalUrl;
  }
}
