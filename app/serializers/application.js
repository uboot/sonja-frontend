import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  
  serializeBelongsTo(snapshot, json, relationship) {
    let key = relationship.key;
    let belongsToId = snapshot.belongsTo(key, { id: true });

    // Do not serialize the relationship if it points to an object with id ==
    // null. The API backend expects a string id and throws an error if it
    // receives null.
    if (belongsToId === null) {
      return;
    }

    super.serializeBelongsTo(snapshot, json, relationship)
  }

  keyForAttribute(attr, method) {
    return attr;
  }

  keyForRelationship(key, relationship, method) {
    return key;
  }

}
