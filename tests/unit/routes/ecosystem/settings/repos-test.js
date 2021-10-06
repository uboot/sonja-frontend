import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ecosystem/settings/repos', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:ecosystem/settings/repos');
    assert.ok(route);
  });
});
