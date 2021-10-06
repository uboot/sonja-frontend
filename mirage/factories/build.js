import { Factory, association } from 'ember-cli-mirage';

export default Factory.extend({
  status(i) {
    let values = ['new', 'active', 'error'];

    return values[i % values.length];
  },

  profile: association(),

  log: association(),

  package: association(),
});
