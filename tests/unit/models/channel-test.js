import { module, test } from 'qunit';
import { setupTest } from 'sonja/tests/helpers';

module('Unit | Model | channel', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('channel', {});
    assert.ok(model);
  });
});
