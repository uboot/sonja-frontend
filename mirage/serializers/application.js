import { JSONAPISerializer } from 'miragejs';
import Ember from 'ember';

const { underscore } = Ember.String;

export default JSONAPISerializer.extend({

  keyForAttribute(key, method) {
    return underscore(key);
  },

  keyForRelationship(key, relationship, method) {
    return key;
  }

});
