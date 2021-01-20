import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class RepoModel extends Model {
  @attr name;
  @attr url;
  @attr path;
  @belongsTo('ecosystem') ecosystem;
  @hasMany('commit') commits;
}
