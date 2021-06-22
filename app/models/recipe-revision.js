import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class RecipeRevisionModel extends Model {
  @attr revision;
  @belongsTo('recipe') recipe;
  @hasMany('packages') packages;
}
