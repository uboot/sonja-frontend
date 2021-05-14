import Model, { attr, hasMany } from '@ember-data/model';

export default class EcosystemModel extends Model {
  @attr name;
  @attr user;
  @attr conan_remote;
  @attr('boolean') conan_verify_ssl;
  @attr conan_user;
  @attr conan_password;
  @attr public_ssh_key;
  @attr known_hosts;
  @attr settings;
  @hasMany('build') builds;
  @hasMany('repo') repos;
  @hasMany('profile') profiles;
  @hasMany('channel') channels;
  @hasMany('recipe') recipes;
}
