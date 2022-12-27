import Model, { attr } from '@ember-data/model';

export default class ConfigurationModel extends Model {
  @attr github_secret;
  @attr public_ssh_key;
  @attr known_hosts;
  @attr git_credentials;
  @attr docker_credentials;
}
