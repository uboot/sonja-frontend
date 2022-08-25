import { module, test } from 'qunit';
import { setupTest } from 'sonja/tests/helpers';

module('Unit | Route | ecosystem/settings/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:ecosystem/settings/index');
    assert.ok(route);
  });
});
