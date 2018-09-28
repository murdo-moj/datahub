import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, triggerEvent } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { setProperties } from '@ember/object';
import { TestContext } from 'ember-test-helpers';
import { getText, querySelector, querySelectorAll } from 'wherehows-web/tests/helpers/dom-helpers';
import { typeInSearch } from 'ember-power-select/test-support/helpers';

interface ISearchBoxContract {
  placeholder: string;
  text?: string;
  onUserType: () => PromiseLike<Array<string>>;
  onSearch: (text: string) => void;
}

interface ISearchBoxTestContext extends TestContext, ISearchBoxContract {}

const inputSelector = '.ember-power-select-search-input';
const optionSelector = '.ember-power-select-option';
const searchButtonSelector = '.search-button';

const getInput = (test: ISearchBoxTestContext): HTMLInputElement => {
  return querySelector<HTMLInputElement>(test, inputSelector);
};

const focusInput = async () => {
  await click(inputSelector); // Focus
  await triggerEvent(inputSelector, 'focus');
};

const blurInput = async () => {
  await click('button'); // Blur
  await triggerEvent(inputSelector, 'blur');
};

const getBaseTest = async (test: ISearchBoxTestContext, override: ISearchBoxContract | {} = {}) => {
  const props: ISearchBoxContract = {
    placeholder: 'this is my placeholder',
    text: undefined,
    onUserType: async () => [],
    onSearch: () => {},
    ...override
  };

  setProperties(test, props);

  await render(hbs`
    {{#search/search-box
      placeholder=(readonly placeholder)
      text=(readonly text)
      onUserType=(action onUserType)
      onSearch=(action onSearch) as |suggestion|}}
      {{suggestion}}
    {{/search/search-box}}
  `);

  return props;
};

module('Integration | Component | search/search-box', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(this: ISearchBoxTestContext, assert) {
    const props = await getBaseTest(this);

    assert.equal(getText(this), 'Search');
    assert.equal(getInput(this).placeholder, props.placeholder);
    assert.equal(getInput(this).value, '');
  });

  test('input shows text', async function(this: ISearchBoxTestContext, assert) {
    const props = await getBaseTest(this, { text: 'search this' });

    assert.equal(getText(this), 'Search');
    assert.equal(getInput(this).placeholder, props.placeholder);
    assert.equal(getInput(this).value, props.text);
  });

  test('input shows text, and it does not lose state', async function(this: ISearchBoxTestContext, assert) {
    const word = 'Hola carambola';
    await getBaseTest(this);

    const input = getInput(this);

    await focusInput();
    await typeInSearch(word);
    assert.equal(input.value, word);

    await blurInput();
    assert.equal(input.value, word);

    await focusInput();
    assert.equal(input.value, word);
  });

  test('show list when text present and focus', async function(this: ISearchBoxTestContext, assert) {
    const searchOptions = ['one', 'two'];
    await getBaseTest(this, { text: 'search this', onUserType: async () => searchOptions });

    await focusInput();
    const domOptions = querySelectorAll(this, optionSelector);

    assert.equal(domOptions.length, 2, 'options should show up');
    searchOptions.forEach((searchOption: string, index: number) => {
      const content = domOptions[index].textContent || '';
      assert.equal(content.trim(), searchOption);
    });

    await blurInput();
    const domOptionsGone = querySelectorAll(this, optionSelector);
    assert.equal(domOptionsGone.length, 0, 'options should hide');
  });

  test('search button triggers search with actual text', async function(this: ISearchBoxTestContext, assert) {
    const expectedSearch = 'expected search';
    let searchedWord = '';
    const onSearch = (word: string) => {
      searchedWord = word;
    };

    await getBaseTest(this, { text: expectedSearch, onSearch });
    await click(searchButtonSelector);

    assert.equal(searchedWord, expectedSearch);
  });

  test('request not completed, will be cancelled on blur', async function(this: ISearchBoxTestContext, assert) {
    let cancelled = false;
    // Does not ever resolve
    const onUserType = () => {
      return {
        cancel: () => {
          cancelled = true;
        }
      };
    };

    await getBaseTest(this, { onUserType });
    await typeInSearch('something');
    await blurInput();

    assert.ok(cancelled);
  });
});
