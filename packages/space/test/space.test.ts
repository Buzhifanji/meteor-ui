import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import { VSpace } from '../src'

describe('v-space', () => {
it('loads default', async () => {
const el = await fixture<VSpace>(html` <v-space>Spacen</v-space> `);
    await elementUpdated(el);
    expect(el).to.not.be.undefined;
    expect(el.textContent).to.include('Space');
    await expect(el).to.be.accessible();
    });
    });