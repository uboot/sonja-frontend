import Model, { attr, belongsTo } from '@ember-data/model';

export default class ProfileModel extends Model {
  @attr name;
  @attr container;
  @attr platform;
  @attr conan_profile;
  @attr docker_registry;
  @attr docker_user;
  @attr docker_password;
  @attr labels;
  @belongsTo('ecosystem') ecosystem;

  get displayPlatform() {
    return this.platform.at(0).toUpperCase() + this.platform.slice(1);
  }

  set displayPlatform(value) {
    this.platform = value.toLowerCase();
  }
}
