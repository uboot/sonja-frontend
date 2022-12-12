import Model, { attr, belongsTo } from '@ember-data/model';

export default class RunModel extends Model {
  @attr status;
  @attr('date') started;
  @belongsTo('build', { async: true, inverse: 'runs' }) build;
}
