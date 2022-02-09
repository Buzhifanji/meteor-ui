import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Button from '../src/button.svelte';

describe('Button web component', () => {
  test('create', () => {
    const { container } = render(Button);
    expect(container).toContainHTML('button');
  });
});
