import { module, test } from 'qunit';
import { setupRenderingTest } from 'sonja/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | options-editor', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('model', {
      options: []
    });

    await render(hbs`<OptionsEditor @model={{this.model}} @property="options"/>`);

    assert.dom(this.element).hasAnyText();
  });
});
