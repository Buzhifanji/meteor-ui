import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Text from '../src/text.svelte';

describe('Text web component', () => {
  test('create', () => {
    const { container } = render(Text);
    expect(container).toContainHTML('text');
  });
});
