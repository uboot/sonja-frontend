import { module, test } from 'qunit';
import { setupTest } from 'sonja/tests/helpers';

module(
  'Unit | Controller | ecosystem/settings/profiles/profile',
  function (hooks) {
    setupTest(hooks);

    // TODO: Replace this with your real tests.
    test('it exists', function (assert) {
      let controller = this.owner.lookup(
        'controller:ecosystem/settings/profiles/profile'
      );
      assert.ok(controller);
    });
  }
);
