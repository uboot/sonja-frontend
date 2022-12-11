import Model, { attr } from '@ember-data/model';

export default class ConfigurationModel extends Model {
  @attr github_secret;
}
