import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'sonja/tests/helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | login', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /login', async function (assert) {
    await visit('/login');

    assert.strictEqual(currentURL(), '/login');
  });
});
