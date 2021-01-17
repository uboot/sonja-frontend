import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ecosystem/profiles/profile', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:ecosystem/profiles/profile');
    assert.ok(route);
  });
});
