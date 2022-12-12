import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class RecipeModel extends Model {
  @attr name;
  @attr version;
  @attr channel;
  @attr user;
  @belongsTo('ecosystem', { async: true, inverse: 'recipes' }) ecosystem;
  @belongsTo('recipe-revision', { async: true, inverse: null }) current_revision;
  @hasMany('recipe-revision', { async: true, inverse: 'recipe' }) revisions;
  @hasMany('build', { async: true, inverse: 'missing_recipes' }) required_by;
}
