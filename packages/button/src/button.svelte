<svelte:options tag="one-button" />

<script lang="ts">
  import { roleButton } from '@one-ui/one-aria';
  import {
    mainfontSize,
    height,
    width,
    fontFamily,
    buttonBackgroundColor,
    buttonBorderColor,
    buttonHoverBackgroundColor,
    buttonActiveBackgroundColor,
    buttonHoverBorderColor,
    buttonActiveBorderColor,
    updateStyleAttribute,
  } from '@one-ui/one-utils';
  import { onMount, afterUpdate, beforeUpdate } from 'svelte';

  const cssVar = [
    height,
    width,
    mainfontSize,
    fontFamily,
    buttonBackgroundColor,
    buttonBorderColor,
    buttonHoverBackgroundColor,
    buttonHoverBorderColor,
    buttonActiveBackgroundColor,
    buttonActiveBorderColor,
  ];

  // initCssVaraible(cssVar);

  export let color: string | null = null;
  export let type: string | null = null;
  $: {
    const { color, type } = $$props;
    updateStyleAttribute('color', color);
    if (type) {
      console.log('type', type);
      updateStyleAttribute('--one-button-background-color', '#82d3f8');
    }
    // updateStyleAttribute('--one-height', height);
  }
</script>

<div>
  <button role={roleButton} style="--one-height: 40px;" />
  <slot />
</div>

<style>
  :host {
    font-family: var(--one-font-family);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    line-height: 1;
    width: var(--one-width);
    height: var(--one-height);
    padding: var(--one-padding, 0 1em);
    border: 1px solid var(--one-button-border-color);
    font-size: var(--one-font-size);
    box-shadow: 0 2px 6px var(--one-box-shadow, #e1e5e8);
    color: var(--one-text-color, #2c3136);
    background-color: var(--one-button-background-color);
    border-radius: var(--one-border-radius, 00.25em);
    transition: color 0.3s var(--one-bezier, cubic-bezier(0.4, 0, 0.2, 1)),
      background-color 0.3s var(--one-bezier, cubic-bezier(0.4, 0, 0.2, 1)),
      opacity 0.3s var(--one-bezier, cubic-bezier(0.4, 0, 0.2, 1)),
      border-color 0.3s var(--one-bezier, cubic-bezier(0.4, 0, 0.2, 1));
  }
  button {
    background: none;
    outline: 0;
    border: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    user-select: none;
    cursor: pointer;
  }
  :host([disabled]),
  :host([loading]) {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.6;
  }
  :host([disabled]:not([type])) {
    background: rgba(0, 0, 0, 0.1);
  }
  :host(:not([disabled]):hover),
  :host(:not([disabled]):focus) {
    border-color: rgba(0, 0, 0, 0.25);
    box-shadow: rgba(0, 0, 0, 0.25) 0 4px 12px;
  }
  :host(:not([disabled]):active) {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0em);
  }

  :host(:not([disabled]):hover) {
    border-color: transparent;
    transform: translateY(-0.25px);
  }
  :host([type='danger']) {
    color: #fff;
    box-shadow: 0 2px 6px var(--one-danger-box-shadow-color, #fd9b96);
    border-color: var(--one-danger-background-color, #e91e63);
    background-color: var(--one-danger-background-color, #e91e63);
  }
  :host([type='primary']) {
    color: #fff;
    box-shadow: 0 2px 6px var(--one-primary-box-shadow-color, #acb5f6);
    border-color: var(--one-primary-background-color, #6777ef);
    background-color: var(--one-primary-background-color, #6777ef);
  }
  :host([type='info']) {
    color: #fff;
    box-shadow: 0 2px 6px var(--one-info-box-shadow-color, #82d3f8);
    border-color: var(--one-info-background-color, #2196f3);
    background-color: var(--one-info-background-color, #2196f3);
  }
  :host([type='warning']) {
    color: #fff;
    box-shadow: 0 2px 6px var(--one-warning-box-shadow-color, #ffc473);
    border-color: var(--one-warning-background-color, #ffc107);
    background-color: var(--one-warning-background-color, #ffc107);
  }
  :host([type='success']) {
    color: #fff;
    box-shadow: 0 2px 6px var(--one-success-box-shadow-color, #a8f5b4);
    border-color: var(--one-success-background-color, #63ed7a);
    background-color: var(--one-success-background-color, #63ed7a);
  }

  :host([ghost]) {
    background-color: var(--one-background-color, #fff);
  }
  :host([ghost][type='danger']) {
    color: var(--one-danger-background-color, #e91e63);
  }
  :host([ghost][type='primary']) {
    color: var(--one-primary-background-color, #6777ef);
  }
  :host([ghost][type='info']) {
    color: var(--one-info-background-color, #2196f3);
  }
  :host([ghost][type='warning']) {
    color: var(--one-warning-background-color, #ffc107);
  }
  :host([ghost][type='success']) {
    color: var(--one-success-background-color, #63ed7a);
  }

  :host([dashed]) {
    border-style: dashed;
    background-color: var(--one-background-color, #fff);
  }
  :host([dashed][type='primary']) {
    color: var(--one-primary-background-color, #6777ef);
  }
</style>
