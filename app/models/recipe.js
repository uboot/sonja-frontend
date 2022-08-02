import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class RecipeModel extends Model {
  @attr name;
  @attr version;
  @attr channel;
  @attr user;
  @belongsTo('ecosystem') ecosystem;
  @hasMany('recipe-revision') revisions;
  @hasMany('build') required_by;
}
