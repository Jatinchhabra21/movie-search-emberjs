import { module, test } from 'qunit';
import { setupRenderingTest } from 'binge-search-(ember)/tests/helpers';
import { render } from '@ember/test-helpers';
import { Pretender } from 'pretender';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | search-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<SearchForm />`);

    assert.dom(this.element).hasText('');
    await pauseTest();
    // Template block usage:
    await render(hbs`
      <SearchForm>
        
      </SearchForm>
    `);
    assert.dom(this.element).hasText('');

    const server = new Pretender(function(){
      
    });

  });
});
