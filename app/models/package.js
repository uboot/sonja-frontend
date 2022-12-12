import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class PackageModel extends Model {
  @attr package_id;
  @belongsTo('recipe-revision', { async: true, inverse: 'packages' }) recipe_revision;
  @hasMany('build', { async: true, inverse: 'package' }) builds;
  @hasMany('package', { async: true, inverse: 'required_by' }) requires;
  @hasMany('package', { async: true, inverse: 'requires' }) required_by;
}
