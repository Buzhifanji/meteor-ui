import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import { VButton } from '../src'

describe('v-button', () => {
    it('loads default', async () => {
        const el = await fixture<VButton>(html` <v-button>Button</v-button> `);
        await elementUpdated(el);
        expect(el).to.not.be.undefined;
        expect(el.textContent).to.include('Button');
        await expect(el).to.be.accessible();
    });
});