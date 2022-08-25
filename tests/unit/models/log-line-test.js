import { module, test } from 'qunit';
import { setupTest } from 'sonja/tests/helpers';

module('Unit | Model | log-line', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('log-line', {});
    assert.ok(model);
  });
});
