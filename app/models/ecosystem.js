import Model, { attr, hasMany } from '@ember-data/model';

export default class EcosystemModel extends Model {
  @attr name;
  @attr user;
  @attr conan_remote;
  @attr conan_config_url;
  @attr conan_config_path;
  @attr conan_config_branch;
  @attr conan_user;
  @attr conan_password;
  @attr public_ssh_key;
  @attr known_hosts;
  @hasMany('build') builds;
  @hasMany('repo') repos;
  @hasMany('profile') profiles;
  @hasMany('channel') channels;
  @hasMany('recipe') recipes;
}
