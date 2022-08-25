import { module, test } from 'qunit';
import { setupRenderingTest } from 'sonja/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | format-date', function(hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('inputValue', new Date('2000-01-12T13:30:00'));

    await render(hbs`{{format-date this.inputValue}}`);

    assert.dom(this.element).hasText('2000-01-12 13:30:00');
  });
});
