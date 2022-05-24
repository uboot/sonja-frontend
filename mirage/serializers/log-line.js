import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  serialize(object, request) {
    let json = ApplicationSerializer.prototype.serialize.apply(this, arguments);
  
    if (request.queryParams.page) {
      json.meta = {
        total_pages: 1
      }
    }
  
    return json;
  }
});
