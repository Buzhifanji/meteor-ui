import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Space from '../src/space.svelte';

describe('Space web component', () => {
  test('create', () => {
    const { container } = render(Space);
    expect(container).toContainHTML('space');
  });
});
