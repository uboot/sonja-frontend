import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

  name(i) {
    let profiles = [ 'Windows Debug', 'Windows Releas', 'GCC9 Debug', 'GCC9 Release' ];

    return profiles[i % profiles.length];
  }
  
});
