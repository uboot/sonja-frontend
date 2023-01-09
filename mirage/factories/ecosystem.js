import { Factory } from 'miragejs';

export default Factory.extend({
  name(i) {
    let values = ['Default', 'My Company'];

    return values[i % values.length];
  },

  user(i) {
    let values = ['sonja', 'mycompany'];

    return values[i % values.length];
  },

  conan_config_url() {
    return 'git@github.com:uboot/sonja.git';
  },

  conan_config_path() {
    return 'conan-config';
  },

  conan_config_branch() {
    return 'master';
  },

  conan_credentials() {
    return [
      {
        remote: 'uboot',
        username: 'agent',
        password: 'demo',
      }
    ];
  },
});
