import { JSONAPISerializer } from 'miragejs';

export default JSONAPISerializer.extend({

  keyForAttribute(attr, method) {
    return attr;
  },

  keyForRelationship(key, relationship, method) {
    return key;
  }

});
