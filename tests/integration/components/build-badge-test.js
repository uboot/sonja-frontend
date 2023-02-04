import { module, test } from 'qunit';
import { setupRenderingTest } from 'sonja/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | build-badge', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<BuildBadge />`);

    assert.dom(this.element).hasText(' | ');
  });
});
