import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class BuildModel extends Model {
  @attr status;
  @attr('date') created;
  @belongsTo('log') log;
  @belongsTo('commit') commit;
  @belongsTo('profile') profile;
  @belongsTo('package') package;
  @hasMany('recipe', { inverse: null }) missing_recipes;
  @hasMany('package', { inverse: null }) missing_packages;
}
