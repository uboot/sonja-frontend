import { Factory } from 'miragejs';

export default Factory.extend({
  name(i) {
    let values = ['Releases', 'Development', 'Unstable'];

    return values[i % values.length];
  },

  conan_channel(i) {
    let values = ['stable', 'testing', 'latest'];

    return values[i % values.length];
  },

  ref_pattern(i) {
    let values = ['heads/master', 'heads/feature.*', 'tags/v.*'];

    return values[i % values.length];
  },
});
