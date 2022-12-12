import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class BuildModel extends Model {
  @attr status;
  @attr('date') created;
  @belongsTo('commit', { async: true, inverse: 'builds' }) commit;
  @belongsTo('profile', { async: true, inverse: null }) profile;
  @belongsTo('package', { async: true, inverse: 'builds' }) package;
  @belongsTo('recipe-revision', { async: true, inverse: 'builds' }) recipe_revision;
  @hasMany('recipe', { async: true, inverse: null }) missing_recipes;
  @hasMany('package', { async: true, inverse: null }) missing_packages;
  @hasMany('run', { async: true, inverse: 'build' }) runs;
}
