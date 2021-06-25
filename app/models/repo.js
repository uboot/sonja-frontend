import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class RepoModel extends Model {
  @attr name;
  @attr url;
  @attr path;
  @attr exclude;
  @belongsTo('ecosystem') ecosystem;
  @hasMany('commit') commits;
}
