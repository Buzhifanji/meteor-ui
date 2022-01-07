import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import { VLayout } from '../src'

describe('v-layout', () => {
    it('loads default', async () => {
        const el = await fixture<VLayout>(html` <v-layout>Layoutn</v-layout> `);
        await elementUpdated(el);
        expect(el).to.not.be.undefined;
        expect(el.textContent).to.include('Layout');
        await expect(el).to.be.accessible();
    });
});