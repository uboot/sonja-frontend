import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

  name(i) {
    let values = [ 'Hello', 'Deadlock' ];

    return values[i % values.length];
  },
  
  url() {
    return 'git@github.com:uboot/conan-ci.git'
  },

  path(i) {
    let values = [ 'packages/hello', 'packages/deadlock' ];

    return values[i % values.length];
  },

  exclude(i) {
    let labels = [
      {
        label: "embedded"
      },
      {
        label: "desktop"
      }
    ];

    return [
      labels[i % labels.length]
    ];
  }

});
