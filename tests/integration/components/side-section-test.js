import { module, test } from 'qunit';
import { setupRenderingTest } from 'binge-search-(ember)/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | side-section', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<SideSection />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <SideSection>
        template block text
      </SideSection>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
