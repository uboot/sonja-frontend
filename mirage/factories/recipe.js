import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return 'hello';
  },

  version() {
    return '1.2.3';
  },

  channel() {
    return 'stable';
  },

  user() {
    return 'mycompany';
  },
});
