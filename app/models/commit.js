import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class CommitModel extends Model {
  @attr sha;
  @belongsTo('repo') repo;
  @belongsTo('channel') channel;
  @hasMany('build') builds;
}
