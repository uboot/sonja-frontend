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
  @hasMany('repo', { async: true, inverse: 'ecosystem' }) repos;
  @hasMany('profile', { async: true, inverse: 'ecosystem' }) profiles;
  @hasMany('channel', { async: true, inverse: 'ecosystem' }) channels;
  @hasMany('recipe', { async: true, inverse: 'ecosystem' }) recipes;
}
