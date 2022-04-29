import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  alwaysIncludeLinkageData: true,

  serialize(object, request) {
    let json = ApplicationSerializer.prototype.serialize.apply(this, arguments);
  
    json.meta = {
      total_pages: 3
    }
  
    return json;
  }
});
