import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class PackageModel extends Model {
  @attr package_id;
  @attr version;
  @attr channel;
  @attr user;
  @attr revision;
  @belongsTo('recipe') recipe;
  @hasMany('package') requires;
  @hasMany('package') required_by;
}
