import { module, test } from 'qunit';
import { setupRenderingTest } from 'sonja/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | channel-editor', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('channel', {
      name: 'Channel',
    });
    this.set('save', () => {});
    this.set('cancel', () => {});

    await render(hbs`<ChannelEditor  @model={{this.channel}} @onSave={{this.save}} @onCancel={{this.cancel}}/>`);

    assert.dom(this.element).hasAnyText();
  });
});
