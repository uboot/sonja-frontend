import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | repo-editor', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('repo', {
      name: 'Repo',
      options: [],
      exclude: [],
    });
    this.set('save', () => {});
    this.set('cancel', () => {});

    await render(hbs`<RepoEditor @model={{this.repo}} @onSave={{this.save}} @onCancel={{this.cancel}}/>`);

    assert.dom(this.element).hasAnyText();
  });
});
