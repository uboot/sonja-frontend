import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class PackageModel extends Model {
  @attr package_id;
  @belongsTo('recipe-revision') recipe_revision;
  @hasMany('package', { inverse: null }) requires;
  @hasMany('package', { inverse: null }) required_by;
}
