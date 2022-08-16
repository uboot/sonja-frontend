import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class BuildModel extends Model {
  @attr status;
  @attr('date') created;
  @belongsTo('commit') commit;
  @belongsTo('profile') profile;
  @belongsTo('package', { inverse: 'builds' }) package;
  @belongsTo('recipe-revision', { inverse: 'builds' }) recipe_revision;
  @hasMany('recipe', { inverse: null }) missing_recipes;
  @hasMany('package', { inverse: null }) missing_packages;
  @hasMany('run') runs;
}
