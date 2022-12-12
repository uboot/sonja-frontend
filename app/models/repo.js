import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
import Validator from 'ember-model-validator/decorators/object-validator';

@Validator
export default class RepoModel extends Model {
  @attr name;
  @attr url;
  @attr path;
  @attr version;
  @attr exclude;
  @attr options;
  @belongsTo('ecosystem', { async: true, inverse: 'repos' }) ecosystem;
  @hasMany('commit', { async: true, inverse: 'repo' }) commits;

  transitionTo() {
    return this._internalModel.transitionTo(...arguments);
  }

  validations = {
    name: {
      presence: true
    },
  }
}
