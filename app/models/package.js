import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class PackageModel extends Model {
  @attr package_id;
  @belongsTo('recipe-revision') recipe_revision;
  @hasMany('package', { inverse: 'required_by' }) requires;
  @hasMany('package', { inverse: 'requires' }) required_by;
}
