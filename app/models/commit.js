import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class CommitModel extends Model {
  @attr sha;
  @attr message;
  @attr user_name;
  @attr user_email;
  @belongsTo('repo') repo;
  @belongsTo('channel') channel;
  @hasMany('build') builds;
}
