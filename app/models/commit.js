import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class CommitModel extends Model {
  @attr sha;
  @attr message;
  @attr user_name;
  @attr user_email;
  @belongsTo('repo', { async: true, inverse: 'commits' }) repo;
  @belongsTo('channel', { async: true, inverse: null }) channel;
  @hasMany('build', { async: true, inverse: 'commit' }) builds;
}
