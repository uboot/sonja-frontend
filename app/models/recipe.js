import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class RecipeModel extends Model {
  @attr name;
  @attr version;
  @attr channel;
  @attr user;
  @belongsTo('ecosystem') ecosystem;
  @belongsTo('recipe-revision', { inverse: null }) current_revision;
  @hasMany('recipe-revision', { inverse: 'recipe' }) revisions;
  @hasMany('build') required_by;
}
