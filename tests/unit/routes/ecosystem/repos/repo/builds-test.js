import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ecosystem/repos/repo/builds', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:ecosystem/repos/repo/builds');
    assert.ok(route);
  });
});
