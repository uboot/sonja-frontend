import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    let values = [
      'Windows Debug',
      'Windows Release',
      'GCC9 Debug',
      'GCC9 Release',
    ];

    return values[i % values.length];
  },

  conan_profile(i) {
    let values = [
      'windows-debug',
      'windows-release',
      'linux-debug',
      'linux-release',
    ];

    return values[i % values.length];
  },

  platform(i) {
    let values = ['windows', 'windows', 'linux', 'linux'];

    return values[i % values.length];
  },

  container(i) {
    let values = ['registry.azurecr.io/msvc15:latest', 'uboot/gcc9:latest'];

    return values[i % values.length];
  },

  docker_user(i) {
    let values = ['user', ''];

    return values[Math.floor(i / 2) % values.length];
  },

  docker_password(i) {
    let values = ['paSSw0rd', ''];

    return values[Math.floor(i / 2) % values.length];
  },

  labels(i) {
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
});
