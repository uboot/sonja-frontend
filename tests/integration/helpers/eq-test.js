import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | eq', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it renders', async function (assert) {
    this.set('rhs', '1234');
    this.set('lhs', '1234');

    await render(hbs`{{eq this.rhs this.lhs}}`);

    assert.dom(this.element).hasText('true');
  });
});
