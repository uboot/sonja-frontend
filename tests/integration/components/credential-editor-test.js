import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | credential-editor', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('model', {});

    await render(hbs`<CredentialEditor @model={{this.model}}/>`);

    assert.dom(this.element).hasAnyText();
  });
});
