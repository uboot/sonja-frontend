import Model, { attr, belongsTo } from '@ember-data/model';

export default class RepoModel extends Model {
  @attr url;
  @attr path;
  @belongsTo('ecosystem') ecosystem;
}