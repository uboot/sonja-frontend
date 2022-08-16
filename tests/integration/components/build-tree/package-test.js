import { module, test } from 'qunit';
import { setupRenderingTest } from 'sonja/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | build-tree/package', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<BuildTree::Package />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <BuildTree::Package>
        template block text
      </BuildTree::Package>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});