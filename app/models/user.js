import Model, { attr } from '@ember-data/model';

export default class BuildModel extends Model {
  @attr user_name;
  @attr first_name;
  @attr last_name;
  @attr email;
  @attr password;
  @attr old_password;
  @attr permissions;
}
