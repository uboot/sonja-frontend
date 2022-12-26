import { module, test } from 'qunit';
import { visit, currentURL, pauseTest } from '@ember/test-helpers';
import { setupApplicationTest } from 'sonja/tests/helpers';
import { authenticateSession } from 'ember-simple-auth/test-support';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | repo', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting 1/repos/1', async function (assert) {
    server.create('user', 1);
    server.createList('ecosystem', 1).forEach((ecosystem) => {
      server.createList('repo', 1, { ecosystem }).forEach((repo) => {
        server.createList('commit', 1, { repo }).forEach((commit) => {
          server.createList('build', 1, {
            commit,
          });
        });
      })
    });

    await authenticateSession();

    await visit('1/repos/1');

    // await pauseTest();

    assert.strictEqual(currentURL(), '1/repos/1');
  });
});
