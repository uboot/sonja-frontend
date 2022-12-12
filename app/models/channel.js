import Model, { attr, belongsTo } from '@ember-data/model';

export default class ChannelModel extends Model {
  @attr name;
  @attr conan_channel;
  @attr branch;
  @belongsTo('ecosystem', { async: true, inverse: 'channels' }) ecosystem;
}
