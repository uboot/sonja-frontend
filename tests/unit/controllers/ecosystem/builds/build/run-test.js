import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | ecosystem/builds/build/run', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:ecosystem/builds/build/run');
    assert.ok(controller);
  });
});
