import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class RecipeRevisionModel extends Model {
  @attr revision;
  @belongsTo('recipe', { async: true, inverse: 'revisions' }) recipe;
  @hasMany('package', { async: true, inverse: 'recipe_revision' }) packages;
  @hasMany('build', { async: true, inverse: 'recipe_revision' }) builds;
}
