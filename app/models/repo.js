import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
import { modelValidator } from 'ember-model-validator';

@modelValidator
export default class RepoModel extends Model {
  @attr name;
  @attr url;
  @attr path;
  @attr version;
  @attr exclude;
  @attr options;
  @belongsTo('ecosystem', { async: true, inverse: 'repos' }) ecosystem;
  @hasMany('commit', { async: true, inverse: 'repo' }) commits;

  validations = {
    name: {
      presence: true
    },
  }
}
