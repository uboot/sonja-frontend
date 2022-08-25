import { module, test } from 'qunit';
import { setupRenderingTest } from 'sonja/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | text-dialog', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('model', {
      content: '',
    });

    await render(hbs`<TextDialog @model={{this.model}} @property="content"/>`);

    assert.equal(this.element.textContent.trim(), 'Show');
  });
});
