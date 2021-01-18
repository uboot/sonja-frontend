import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

  name(i) {
    let values = [ 'stable', 'testing', 'latest' ];

    return values[i % values.length];
  },

  branch(i) {
    let values = [ 'master', 'next', 'feature/*' ];

    return values[i % values.length];
  }

});
