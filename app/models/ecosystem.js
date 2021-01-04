import Model, { attr } from '@ember-data/model';
export default class EcosystemModel extends Model {
  @attr name;
  @attr user;
  @attr public_ssh_key;
  @attr known_hosts;
  @attr settings;
}
