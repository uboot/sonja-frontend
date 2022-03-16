import { Factory } from 'miragejs';

export default Factory.extend({
  name(i) {
    let values = ['Hello', 'Deadlock'];

    return values[i % values.length];
  },

  url() {
    return 'git@github.com:uboot/sonja.git';
  },

  path(i) {
    let values = ['packages/hello', 'packages/deadlock'];

    return values[i % values.length];
  },

  version(i) {
    let values = ['', '1.2.3'];

    return values[i % values.length];
  },

  exclude(i) {
    let labels = [
      {
        label: 'embedded',
      },
      {
        label: 'desktop',
      },
    ];

    return [labels[i % labels.length]];
  },

  options(i) {
    let options = [
      {
        key: 'hello:shared',
        value: 'True',
      },
      {
        key: 'deadlock:with_test',
        value: 'False',
      },
    ];

    return [options[i % options.length]];
  },
});
