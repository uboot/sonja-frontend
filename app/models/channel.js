import Model, { attr, belongsTo } from '@ember-data/model';

export default class ChannelModel extends Model {
  @attr name;
  @attr conan_channel;
  @attr conan_remote;
  @attr ref_pattern;
  @belongsTo('ecosystem', { async: true, inverse: 'channels' }) ecosystem;
}
