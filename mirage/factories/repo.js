import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

  url() {
    return 'git@github.com:uboot/conan-ci.git'
  },

  path(i) {
    let paths = [ 'packages/hello', 'packages/deadlock' ];

    return paths[i % paths.length];
  }

});
