import Model, { attr, belongsTo } from '@ember-data/model';

export default class BuildModel extends Model {
  @attr status;
  @belongsTo('log') log;
  @belongsTo('commit') commit;
  @belongsTo('profile') profile;
  @belongsTo('ecosystem') ecosystem;
}
