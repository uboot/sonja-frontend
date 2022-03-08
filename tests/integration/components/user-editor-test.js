import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | user-editor', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('user', {
      permissions: ["read"]
    });

    await render(hbs`<UserEditor @user={{this.user}} />`);

    assert.dom(this.element).hasAnyText();
  });
});
