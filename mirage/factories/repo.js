import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

  url() {
    return 'git@github.com:uboot/conan-ci.git'
  },

  path(i) {
    let values = [ 'packages/hello', 'packages/deadlock' ];

    return values[i % values.length];
  }

});
