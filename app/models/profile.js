import Model, { attr, belongsTo } from '@ember-data/model';

export default class ProfileModel extends Model {
    @attr name;
    @attr container;
    @attr settings;
    @belongsTo('ecosystem') ecosystem;
}
