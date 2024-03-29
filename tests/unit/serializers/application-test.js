import { module, test } from 'qunit';
import { setupTest } from 'sonja/tests/helpers';

module('Unit | Serializer | application', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('application');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('ecosystem', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
