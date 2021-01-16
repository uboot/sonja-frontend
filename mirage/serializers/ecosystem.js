import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  links(ecosystem) {
    return {
      'repos': {
        related: `repo`
      }
    };
  },

  shouldIncludeLinkageData(relationshipKey, model) {
    if (relationshipKey === 'profiles') {
      return true;
    }
    return false;
  }

});
