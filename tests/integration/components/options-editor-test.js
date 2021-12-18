import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | options-editor', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<OptionsEditor />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <OptionsEditor>
        template block text
      </OptionsEditor>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
