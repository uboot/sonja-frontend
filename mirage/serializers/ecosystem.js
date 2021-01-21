import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  links(ecosystem) {
    return {
      'repos': {
        related: 'repo'
      },
      'builds': {
        related: 'build'
      }
    };
  },

  shouldIncludeLinkageData(relationshipKey, model) {
    if (relationshipKey === 'profiles' || relationshipKey === 'channels') {
      return true;
    }
    return false;
  }

});
