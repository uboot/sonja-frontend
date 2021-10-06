import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  links(recipe) {
    return {
      revisions: {
        related: 'revision',
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
