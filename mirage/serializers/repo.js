import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  links(ecosystem) {
    return {
      commits: {
        related: `commit`,
      },
    };
  },

  shouldIncludeLinkageData(relationshipKey, model) {
    if (relationshipKey === 'ecosystem') {
      return true;
    }
    return false;
  },
});
