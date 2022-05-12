import Model, { attr } from '@ember-data/model';

export default class LogLineModel extends Model {
  @attr('number') number;
  @attr('date') created;
  @attr content;
}
