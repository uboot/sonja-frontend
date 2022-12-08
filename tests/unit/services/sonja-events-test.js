import { module, test } from 'qunit';
import { setupTest } from 'sonja/tests/helpers';

module('Unit | Service | sonja-events', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:sonja-events');
    assert.ok(service);
  });
});
