import Model, { attr, belongsTo } from '@ember-data/model';

export default class ProfileModel extends Model {
    @attr name;
    @belongsTo('ecosystem') ecosystem;
}
