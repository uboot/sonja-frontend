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
    this.set('save', () => {});
    this.set('cancel', () => {});

    await render(hbs`<UserEditor @user={{this.user}} @onSave={{this.save}} @onCancel={{this.cancel}}/>`);

    assert.dom(this.element).hasAnyText();
  });
});
