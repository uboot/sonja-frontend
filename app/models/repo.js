import Model, { attr, belongsTo } from '@ember-data/model';

export default class RepoModel extends Model {
  @attr name;
  @attr url;
  @attr path;
  @belongsTo('ecosystem') ecosystem;
}
