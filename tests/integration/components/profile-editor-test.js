import { module, test } from 'qunit';
import { setupRenderingTest } from 'sonja/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | profile-editor', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('profile', {
      name: 'Profile',
      labels: [],
    });
    this.set('save', () => {});
    this.set('cancel', () => {});

    await render(hbs`<ProfileEditor  @model={{this.profile}} @onSave={{this.save}} @onCancel={{this.cancel}}/>`);

    assert.dom(this.element).hasAnyText();
  });
});
