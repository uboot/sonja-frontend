import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  links(ecosystem) {
    return {
      'repos': {
        related: `repo`
      }
    };
  }

});
