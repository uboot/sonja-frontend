import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ecosystem/settings/profiles/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:ecosystem/settings/profiles/index');
    assert.ok(route);
  });
});
