import Model, { attr, belongsTo } from '@ember-data/model';

export default class CommitModel extends Model {
  @attr sha;
  @belongsTo('repo') repo;
  @belongsTo('channel') channel;
}
