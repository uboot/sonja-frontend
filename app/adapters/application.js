import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { underscore } from '@ember/string';

export default class ApplicationAdapter extends JSONAPIAdapter {

  namespace = 'api/v1';

  pathForType(type) {
    return underscore(type);
  }
}
