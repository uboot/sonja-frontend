import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  links(build) {
    return {
      runs: {
        related: 'run',
      },
    };
  },

  shouldIncludeLinkageData(relationshipKey, model) {
    if (relationshipKey === 'commit'
    || relationshipKey === 'profile'
    || relationshipKey === 'package'
    || relationshipKey === 'missing_recipes'
    || relationshipKey === 'missing_packages') {
      return true;
    }
    return false;
  },

  serialize(object, request) {
    let json = ApplicationSerializer.prototype.serialize.apply(this, arguments);
  
    if (request.queryParams.page) {
      json.meta = {
        total_pages: 3
      }
    }
  
    return json;
  }
});
