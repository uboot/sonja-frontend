import { module, test } from 'qunit';
import { setupTest } from 'sonja/tests/helpers';

module('Unit | Controller | ecosystem/repos/repo/index', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:ecosystem/repos/repo/index');
    assert.ok(controller);
  });
});
