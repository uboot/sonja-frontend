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
    if (relationshipKey === 'ecosystem' || relationshipKey === 'current_revision') {
      return true;
    }
    return false;
  },
});
