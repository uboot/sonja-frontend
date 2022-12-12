import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'sonja/tests/helpers';
import { authenticateSession } from 'ember-simple-auth/test-support';

module('Acceptance | repo', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting 1/repos/1', async function (assert) {
    await authenticateSession({
      'access_token': '1',
      'token_type': 'bearer'
    });

    await visit('1/repos/1');

    assert.strictEqual(currentURL(), '1/repos/1');
  });
});
