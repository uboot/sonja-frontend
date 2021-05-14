import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class RecipeModel extends Model {
  @attr name;
  @attr version;
  @attr channel;
  @attr user;
  @attr revision;
  @belongsTo('ecosystem') ecosystem;
  @hasMany('packages') packages;
}
