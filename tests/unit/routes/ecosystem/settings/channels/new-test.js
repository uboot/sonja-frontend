import { module, test } from 'qunit';
import { setupTest } from 'sonja/tests/helpers';

module('Unit | Route | ecosystem/settings/channels/new', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:ecosystem/settings/channels/new');
    assert.ok(route);
  });
});
