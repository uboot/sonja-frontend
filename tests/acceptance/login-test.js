import { module, test } from 'qunit';
import { visit, currentURL, pauseTest, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'sonja/tests/helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | login', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /login', async function (assert) {
    await visit('/login');

    assert.strictEqual(currentURL(), '/login');
  });

  test('logging in', async function (assert) {
    await visit('/login');
    await click('.sonja-login-form button');

    assert.strictEqual(currentURL(), '/');
  });
});
