import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | settings-editor', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('user', {
      user_name: 'user',
      first_name: 'First',
      last_name: 'Last',
    });
    this.set('save', () => {});

    await render(hbs`<SettingsEditor @model={{this.user}} @onSave={{this.save}}/>`);

    assert.notEqual(this.element.textContent.trim());
  });
});
